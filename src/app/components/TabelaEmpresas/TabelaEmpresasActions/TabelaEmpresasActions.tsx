"use client";

import { Button } from "../../Button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

export const TabelaEmpresasActions = () => {
  return (
    <div className="mb-5 flex w-full justify-end gap-2">
      <Link href={"/empresa/create"}>
        <Button variant="outline" Icon={AiOutlinePlus}>
          Criar Empresa
        </Button>
      </Link>
    </div>
  );
};
