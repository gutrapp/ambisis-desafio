"use client";

import React, { SyntheticEvent, useState } from "react";
import { api } from "~/config/api";
import { EmpresaWithEnderecoAndLicensasCreateAndLicensas } from "~/types/empresa";
import { EmpresaInfo } from "./EmpresaInfo/EmpresaInfo";
import { EmpresaEndereco } from "./EmpresaEndereco/EmpresaEndereco";
import { Button } from "../Button/Button";
import { EmpresaLicensas } from "./EmpresaLicensas/EmpresaLicensas";
import { redirect, useRouter } from "next/navigation";

type EmpresaFormProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreateAndLicensas;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreateAndLicensas>
  >;
};

export const EmpresaFormUpdate = ({
  empresa,
  setEmpresa,
}: EmpresaFormProps) => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleUpdateEmpresa = (e: SyntheticEvent) => {
    e.preventDefault();

    api
      .put(`empresa/${empresa.id}`, JSON.stringify(empresa))
      .then(() => router.replace("/empresa"));
  };

  const handleDeleteEmpresa = (e: SyntheticEvent) => {
    e.preventDefault();

    api.delete(`empresa/${empresa.id}`).then(() => router.replace("/empresa"));
  };

  return (
    <form
      onSubmit={(e) => handleUpdateEmpresa(e)}
      className="mt-10 flex h-full w-full flex-col gap-5 text-sm"
    >
      {error && (
        <h1 className="w-[320px] rounded-md border border-red-500 px-4 text-sm font-bold text-red-500">
          {error}
        </h1>
      )}
      <div className="grid w-full grid-cols-2 gap-10">
        <EmpresaInfo empresa={empresa} setEmpresa={setEmpresa} />
        <EmpresaEndereco empresa={empresa} setEmpresa={setEmpresa} />
      </div>
      <EmpresaLicensas empresa={empresa} setEmpresa={setEmpresa} />
      <div className="flex h-full w-full items-baseline justify-end gap-2">
        <Button type="submit">Update Empresa</Button>
        <Button
          variant="secondary"
          type="button"
          onClick={(e) => handleDeleteEmpresa(e)}
        >
          Deletar Empresa
        </Button>
      </div>
    </form>
  );
};
