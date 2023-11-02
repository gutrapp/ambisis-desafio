import { useEffect, useState } from "react";
import { api } from "~/config/api";
import { EmpresaWithEnderecoAndLicensasCreateAndLicensas } from "~/types/empresa";

const getEmpresas = async () => {
  return api.get("empresa").then((resposne) => {
    if (resposne.status === 200) return resposne.data;
  });
};

export const useEmpresas = () => {
  const [empresas, setEmpresas] = useState<
    EmpresaWithEnderecoAndLicensasCreateAndLicensas[]
  >([]);

  const fetchEmpresas = () => {
    getEmpresas().then((empresas) => setEmpresas(empresas));
  };

  useEffect(fetchEmpresas, []);

  return { empresas };
};
