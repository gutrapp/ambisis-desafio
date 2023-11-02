import { Empresa, Endereco, LicensaAmbiental } from "@prisma/client";
import { z } from "zod";

export type EmpresaWithEnderecoAndLicensasCreateAndLicensas = Empresa & {
  endereco: Endereco;
  licensasAmbientais: LicensaAmbiental[];
};

export type EmpresaWithEnderecoAndLicensasCreate = Omit<
  Empresa,
  "id" | "ownerId" | "ederecoId"
> & {
  endereco: Omit<Endereco, "id">;
  licensas: Omit<LicensaAmbiental, "id" | "empresaId">[];
};
