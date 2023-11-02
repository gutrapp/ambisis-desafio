"use client";

import { EmpresaFormUpdate } from "~/app/components/EmpresaFormEdit/EmpresaForm";
import { useEmpresa } from "~/app/hooks/useEmpresa";

export default function UpdateEmpresa() {
  const { empresa, setEmpresa } = useEmpresa();
  return (
    <div className="flex h-full w-full flex-col rounded-md border p-20">
      <h1 className="text-2xl font-bold">Editar Empresa</h1>
      <EmpresaFormUpdate empresa={empresa} setEmpresa={setEmpresa} />
    </div>
  );
}
