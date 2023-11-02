import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const empresas = await db.empresa.findMany({
      where: {
        ownerId: session?.user.id,
      },
      include: {
        endereco: true,
        licensasAmbientais: true,
      },
    });

    return NextResponse.json(empresas);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    const data = await request.json();

    if (!session?.user) return NextResponse.error();

    const empresa = await db.empresa.create({
      data: {
        CNPJ: data.CNPJ,
        razaoSocial: data.razaoSocial,
        endereco: {
          create: data.endereco,
        },
        licensasAmbientais: {
          create: [...data.licensas],
        },
        owner: {
          connect: { id: session.user.id },
        },
      },
    });

    return NextResponse.json(empresa);
  } catch (error) {
    return NextResponse.error();
  }
}
