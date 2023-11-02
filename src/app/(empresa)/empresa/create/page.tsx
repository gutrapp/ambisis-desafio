"use client";

import { useState } from "react";
import { EmpresaForm } from "~/app/components/EmpresaForm/EmpresaForm";
import { EmpresaWithEnderecoAndLicensasCreate } from "~/types/empresa";

export default function CreateEmpresa() {
  const [empresa, setEmpresa] = useState<EmpresaWithEnderecoAndLicensasCreate>({
    CNPJ: "",
    razaoSocial: "",
    endereco: {
      CEP: "",
      bairro: "",
      cidade: "",
      complemento: "",
      estado: "SC",
    },
    licensas: [],
  });

  return (
    <div className="flex h-full w-full flex-col rounded-md border p-20">
      <h1 className="text-2xl font-bold">Criar Empresa</h1>
      <EmpresaForm empresa={empresa} setEmpresa={setEmpresa} />
    </div>
  );
}
