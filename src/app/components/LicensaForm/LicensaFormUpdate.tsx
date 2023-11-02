import { EmpresaWithEnderecoAndLicensasCreateAndLicensas } from "~/types/empresa";
import { Modal } from "../Modal/Modal";
import { MutableRefObject, SyntheticEvent, useState } from "react";
import { Input } from "../Input";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "../Button/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LicensaAmbiental } from "@prisma/client";

type LicensaFormProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreateAndLicensas;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreateAndLicensas>
  >;
};

export const LicensaFormUpdate = ({
  empresa,
  setEmpresa,
}: LicensaFormProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const [licensa, setLicensa] = useState<LicensaAmbiental>({
    id: 0,
    empresaId: 0,
    numero: "",
    orgaoAmbiental: "",
    emissao: new Date(),
    validade: new Date(),
  });

  const handleClick = () => {
    setEmpresa({
      ...empresa,
      licensasAmbientais: [...empresa.licensasAmbientais, licensa],
    });
    setOpen(!open);
    setLicensa({
      id: 0,
      empresaId: 0,
      numero: "",
      orgaoAmbiental: "",
      emissao: new Date(),
      validade: new Date(),
    });
  };

  return (
    <Modal label="Adicionar Licensa" open={open} setOpen={setOpen}>
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
            Adicionar
          </Button>
        </div>
      </LocalizationProvider>
    </Modal>
  );
};
