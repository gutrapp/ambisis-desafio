import { EmpresaWithEnderecoAndLicensasCreate } from "~/types/empresa";
import { Input } from "../../Input";
import React from "react";
import { cnpjFormatacao } from "~/utils/formatter";

type EmpresaInfoProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreate;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreate>
  >;
};

export const EmpresaInfo = ({ empresa, setEmpresa }: EmpresaInfoProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="border-b-2 border-black text-lg font-bold text-black">
        Informações Gerais:
      </h1>
      <Input
        title="CNPJ:"
        value={cnpjFormatacao(empresa.CNPJ)}
        onChange={(e) => setEmpresa({ ...empresa, CNPJ: e.target.value })}
      />
      <Input
        title="Razão Social"
        value={empresa.razaoSocial}
        onChange={(e) =>
          setEmpresa({ ...empresa, razaoSocial: e.target.value })
        }
      />
    </div>
  );
};
