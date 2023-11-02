import { EmpresaWithEnderecoAndLicensasCreate } from "~/types/empresa";
import { Modal } from "../Modal/Modal";
import { MutableRefObject, SyntheticEvent, useState } from "react";
import { Input } from "../Input";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "../Button/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LicensaAmbiental } from "@prisma/client";
import { ModalEdit } from "../Modal/ModalEdit";

type LicensaFormProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreate;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreate>
  >;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  licensa: Omit<LicensaAmbiental, "id" | "empresaId">;
  setLicensa: React.Dispatch<
    React.SetStateAction<Omit<LicensaAmbiental, "id" | "empresaId">>
  >;
  idx: number;
};

export const LicensaFormEdit = ({
  empresa,
  setEmpresa,
  licensa,
  setLicensa,
  open,
  setOpen,
  idx,
}: LicensaFormProps) => {
  const handleClick = () => {
    const licensas = [...empresa.licensas];
    licensas[idx] = {
      ...licensa,
    };

    setEmpresa({
      ...empresa,
      licensas,
    });
    setOpen(!open);
  };

  return (
    <ModalEdit label="Adicionar Licensa" open={open} setOpen={setOpen}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="flex flex-col gap-7 p-10">
          <Input
            title="Número:"
            value={licensa.numero}
            onChange={(e) => setLicensa({ ...licensa, numero: e.target.value })}
          />
          <Input
            title="Orgão Ambiental:"
            value={licensa.orgaoAmbiental}
            onChange={(e) =>
              setLicensa({ ...licensa, orgaoAmbiental: e.target.value })
            }
          />
          <DatePicker
            label="Emissão:"
            value={licensa.emissao}
            onChange={(date) =>
              setLicensa({ ...licensa, emissao: date as Date })
            }
          />
          <DatePicker
            label="Validade"
            value={licensa.validade}
            onChange={(date) =>
              setLicensa({ ...licensa, validade: date as Date })
            }
          />
          <Button type="button" onClick={handleClick}>
            Update
          </Button>
        </div>
      </LocalizationProvider>
    </ModalEdit>
  );
};
