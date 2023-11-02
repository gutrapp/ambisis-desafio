"use client";

import { DataTable } from "../DataTable";
import { TabelaEmpresasActions } from "./TabelaEmpresasActions/TabelaEmpresasActions";
import { DataTableHead } from "../DataTable/DataTableHead";
import { DataTableHeadLabels } from "../DataTable/DataTableHead/DataTableHeadLabels";
import { DataTableBody } from "../DataTable/DataTableBody";
import { useEmpresas } from "~/app/hooks/useEmpresas";
import { useRouter } from "next/navigation";
import { cepFormatacao, cnpjFormatacao } from "~/utils/formatter";

export const TabelaEmpresas = () => {
  const router = useRouter();

  const { empresas } = useEmpresas();

  return (
    <div>
      <TabelaEmpresasActions />
      <DataTable>
        <DataTableHead>
          <DataTableHeadLabels>
            <td className="border text-center">CNPJ:</td>
            <td className="border text-center">Razão Social:</td>
            <td className="border text-center">CEP:</td>
            <td className="border text-center">Cidade:</td>
            <td className="border text-center">Estado:</td>
            <td className="border text-center">Bairro:</td>
            <td className="border text-center">Complemento:</td>
            <td className="border text-center">Licensas:</td>
          </DataTableHeadLabels>
        </DataTableHead>
        <DataTableBody>
          {empresas.map((empresa) => {
            return (
              <tr
                className="hover:cursor-pointer"
                onClick={() => router.push(`/empresa/${empresa.id}`)}
              >
                <td className="border text-center">
                  {cnpjFormatacao(empresa.CNPJ)}
                </td>
                <td className="border text-center">{empresa.razaoSocial}</td>
                <td className="border text-center">
                  {cepFormatacao(empresa.endereco.CEP)}
                </td>
                <td className="border text-center">
                  {empresa.endereco.cidade}
                </td>
                <td className="border text-center">
                  {empresa.endereco.estado}
                </td>
                <td className="border text-center">
                  {empresa.endereco.bairro}
                </td>
                <td className="border text-center">
                  {empresa.endereco.complemento}
                </td>
                <td className="border text-center">
                  {empresa.licensasAmbientais.length}
                </td>
              </tr>
            );
          })}
        </DataTableBody>
      </DataTable>
    </div>
  );
};
