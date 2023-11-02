import { EmpresaWithEnderecoAndLicensasCreateAndLicensas } from "~/types/empresa";
import { Input } from "../../Input";
import React from "react";
import { Select } from "../../Select/Select";
import { STATE_CHOICES } from "~/utils/choices";
import { cepFormatacao } from "~/utils/formatter";

type EmpresaEnderecoProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreateAndLicensas;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreateAndLicensas>
  >;
};

export const EmpresaEndereco = ({
  empresa,
  setEmpresa,
}: EmpresaEnderecoProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="border-b-2 border-black text-lg font-bold text-black">
        Endereço:
      </h1>
      <Input
        title="CEP:"
        value={cepFormatacao(empresa.endereco.CEP)}
        onChange={(e) =>
          setEmpresa({
            ...empresa,
            endereco: { ...empresa.endereco, CEP: e.target.value },
          })
        }
      />
      <Input
        title="Bairro:"
        value={empresa.endereco.bairro}
        onChange={(e) =>
          setEmpresa({
            ...empresa,
            endereco: { ...empresa.endereco, bairro: e.target.value },
          })
        }
      />
      <Input
        title="Cidade:"
        value={empresa.endereco.cidade}
        onChange={(e) =>
          setEmpresa({
            ...empresa,
            endereco: { ...empresa.endereco, cidade: e.target.value },
          })
        }
      />
      <Input
        title="Complemento:"
        value={empresa.endereco.complemento}
        onChange={(e) =>
          setEmpresa({
            ...empresa,
            endereco: { ...empresa.endereco, complemento: e.target.value },
          })
        }
      />
      <Select
        title="Estado:"
        value={empresa.endereco.estado}
        onChange={(e) =>
          setEmpresa({
            ...empresa,
            endereco: { ...empresa.endereco, estado: e.target.value },
          })
        }
        choices={STATE_CHOICES}
      />
    </div>
  );
};
