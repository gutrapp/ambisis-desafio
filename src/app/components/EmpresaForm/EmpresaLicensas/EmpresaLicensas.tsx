import React, { useRef, useState } from "react";
import { EmpresaWithEnderecoAndLicensasCreate } from "~/types/empresa";
import { LicensaForm } from "../../LicensaForm/LicensaForm";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { LicensaFormEdit } from "../../LicensaForm/LicensaFormEdit";
import { LicensaAmbiental } from "@prisma/client";

type EmpresaLicensasProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreate;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreate>
  >;
};

export const EmpresaLicensas = ({
  empresa,
  setEmpresa,
}: EmpresaLicensasProps) => {
  const [currentLicensa, setCurrentLicensa] = useState<
    Omit<LicensaAmbiental, "id" | "empresaId">
  >({
    numero: "",
    orgaoAmbiental: "",
    emissao: new Date(),
    validade: new Date(),
  });

  const [idx, setIdx] = useState<number>(0);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="border-b-2 border-black text-lg font-bold text-black">
        Licensas Ambientais:
      </h1>
      <div className="flex h-[200px] w-full flex-col gap-4 overflow-y-hidden rounded-md p-2 ring-2 ring-black ring-offset-2">
        {empresa.licensas.map((licensa, index) => {
          return (
            <div className="flex items-center justify-between rounded-md ring-2 ring-black ring-offset-2">
              <div>{licensa.numero}</div>
              <div className="flex justify-between gap-5">
                <AiOutlineEdit
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentLicensa(licensa);
                    setIdx(index);
                    setOpen(true);
                  }}
                />
                <AiFillDelete
                  onClick={() => {
                    const _licensas = [...empresa.licensas];
                    _licensas.splice(index, 1);
                    setEmpresa({
                      ...empresa,
                      licensas: _licensas,
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <LicensaForm empresa={empresa} setEmpresa={setEmpresa} />
      </div>
      <LicensaFormEdit
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
