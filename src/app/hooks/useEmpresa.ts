import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "~/config/api";
import { EmpresaWithEnderecoAndLicensasCreateAndLicensas } from "~/types/empresa";

const getEmpresa = async (empresaId: string) => {
  return api.get(`empresa/${empresaId}`).then((resposne) => {
    if (resposne.status === 200) return resposne.data;
  });
};

export const useEmpresa = () => {
  const { empresaId } = useParams();

  const [empresa, setEmpresa] =
    useState<EmpresaWithEnderecoAndLicensasCreateAndLicensas>({
      CNPJ: "",
      ederecoId: 0,
      endereco: {
        id: 0,
        bairro: "",
        CEP: "",
        cidade: "",
        complemento: "",
        estado: "",
      },
      id: 0,
      licensasAmbientais: [],
      ownerId: "",
      razaoSocial: "",
    });

  const fetchEmpresa = () => {
    getEmpresa(empresaId as string).then((empresa) => setEmpresa(empresa));
  };

  useEffect(fetchEmpresa, []);

  return { empresa, setEmpresa };
};
