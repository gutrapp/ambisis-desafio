import React, { useState } from "react";
import { EmpresaWithEnderecoAndLicensasCreateAndLicensas } from "~/types/empresa";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { parseISO } from "date-fns";
import { LicensaAmbiental } from "@prisma/client";
import { LicensaFormUpdate } from "../../LicensaForm/LicensaFormUpdate";
import { LicensaFormUpdateEdit } from "../../LicensaForm/LicensaFormUpdateEdit";

type EmpresaLicensasProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreateAndLicensas;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreateAndLicensas>
  >;
};

export const EmpresaLicensas = ({
  empresa,
  setEmpresa,
}: EmpresaLicensasProps) => {
  const [idx, setIdx] = useState<number>(0);

  const [currentLicensa, setCurrentLicensa] = useState<{
    id: number;
    numero: string;
    orgaoAmbiental: string;
    emissao: string;
    validade: string;
    empresaId: number;
  }>({
    id: 0,
    empresaId: 0,
    numero: "",
    orgaoAmbiental: "",
    emissao: "",
    validade: "",
  });

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="border-b-2 border-black text-lg font-bold text-black">
        Licensas Ambientais:
      </h1>
      <div className="flex h-[200px] w-full flex-col gap-4 overflow-y-hidden rounded-md p-2 ring-2 ring-black ring-offset-2">
        {empresa.licensasAmbientais.map((licensa, index) => {
          return (
            <div className="flex items-center justify-between rounded-md ring-2 ring-black ring-offset-2">
              <div>{licensa.numero}</div>
              <div className="flex justify-between gap-5">
                <AiOutlineEdit
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentLicensa({
                      ...licensa,
                      emissao: licensa.emissao.toString(),
                      validade: licensa.validade.toString(),
                    });
                    setIdx(index);
                    setOpen(true);
                  }}
                />
                <AiFillDelete
                  onClick={() => {
                    const _licensas = [...empresa.licensasAmbientais];
                    _licensas.splice(index, 1);
                    setEmpresa({
                      ...empresa,
                      licensasAmbientais: _licensas,
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <LicensaFormUpdate empresa={empresa} setEmpresa={setEmpresa} />
      </div>
      <LicensaFormUpdateEdit
        empresa={empresa}
        setEmpresa={setEmpresa}
        open={open}
        setOpen={setOpen}
        licensa={currentLicensa}
        setLicensa={setCurrentLicensa}
        idx={idx}
      />
    </div>
  );
};
