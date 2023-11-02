import { LicensaAmbiental } from "@prisma/client";
import { getServerSession } from "next-auth";
import url from "url";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export async function PUT(
  request: NextRequest,
  context: { params: { empresaId: string } },
) {
  try {
    const { empresaId } = context.params;

    const session = await getServerSession(authOptions);

    const data = await request.json();

    if (!session?.user || !empresaId) return NextResponse.error();

    const empresa = await db.empresa.update({
      where: {
        id: parseInt(empresaId as string),
      },
      data: {
        CNPJ: data.CNPJ,
        razaoSocial: data.razaoSocial,
        endereco: {
          update: data.endereco,
        },
      },
      include: {
        licensasAmbientais: true,
      },
    });

    data.licensasAmbientais.map(async (licensa: LicensaAmbiental) => {
      if (!licensa.empresaId) {
        await db.licensaAmbiental.create({
          data: {
            emissao: licensa.emissao,
            numero: licensa.numero,
            orgaoAmbiental: licensa.orgaoAmbiental,
            validade: licensa.validade,
            empresa: {
              connect: { id: empresa.id },
            },
          },
        });
      } else {
        await db.licensaAmbiental.update({
          where: {
            id: licensa.id,
          },
          data: {
            emissao: licensa.emissao,
            numero: licensa.numero,
            orgaoAmbiental: licensa.orgaoAmbiental,
            validade: licensa.validade,
          },
        });
      }
    });

    const licesasIds: number[] =
      data.licensasAmbientais.map((licensa: LicensaAmbiental) => licensa.id) ||
      [];

    const deleteIds = empresa.licensasAmbientais
      .filter((licensa) => !licesasIds.includes(licensa.id))
      .map((licensa) => licensa.id);

    await db.licensaAmbiental.deleteMany({
      where: {
        id: { in: deleteIds },
      },
    });

    return NextResponse.json(empresa);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function GET(
  request: NextRequest,
  context: { params: { empresaId: string } },
) {
  try {
    const { empresaId } = context.params;

    const session = await getServerSession(authOptions);

    if (!session?.user || !empresaId) return NextResponse.error();

    const empresa = await db.empresa.findFirst({
      where: {
        id: parseInt(empresaId as string),
      },
      include: {
        licensasAmbientais: true,
        endereco: true,
      },
    });

    return NextResponse.json(empresa);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: { empresaId: string } },
) {
  try {
    const { empresaId } = context.params;

    const session = await getServerSession(authOptions);

    if (!session?.user || !empresaId) return NextResponse.error();

    const empresa = await db.empresa.delete({
      where: {
        id: parseInt(empresaId as string),
      },
    });

    return NextResponse.json(empresa);
  } catch (error) {
    return NextResponse.error();
  }
}
