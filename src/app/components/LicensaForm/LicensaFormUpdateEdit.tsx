import { EmpresaWithEnderecoAndLicensasCreateAndLicensas } from "~/types/empresa";
import { Input } from "../Input";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "../Button/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ModalEdit } from "../Modal/ModalEdit";

type LicensaFormProps = {
  empresa: EmpresaWithEnderecoAndLicensasCreateAndLicensas;
  setEmpresa: React.Dispatch<
    React.SetStateAction<EmpresaWithEnderecoAndLicensasCreateAndLicensas>
  >;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  licensa: {
    id: number;
    numero: string;
    orgaoAmbiental: string;
    emissao: string;
    validade: string;
    empresaId: number;
  };
  setLicensa: React.Dispatch<
    React.SetStateAction<{
      id: number;
      numero: string;
      orgaoAmbiental: string;
      emissao: string;
      validade: string;
      empresaId: number;
    }>
  >;
  idx: number;
};

export const LicensaFormUpdateEdit = ({
  empresa,
  setEmpresa,
  licensa,
  setLicensa,
  open,
  setOpen,
  idx,
}: LicensaFormProps) => {
  const handleClick = () => {
    const licensasAmbientais = [...empresa.licensasAmbientais];
    licensasAmbientais[idx] = {
      ...licensa,
      emissao: new Date(licensa.emissao.slice(0, -1)),
      validade: new Date(licensa.validade.slice(0, -1)),
    };

    setEmpresa({
      ...empresa,
      licensasAmbientais,
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
            value={new Date(licensa.emissao.slice(0, -1))}
            onChange={(date) =>
              setLicensa({ ...licensa, emissao: date?.toISOString() as string })
            }
          />
          <DatePicker
            label="Validade"
            value={new Date(licensa.validade.slice(0, -1))}
            onChange={(date) =>
              setLicensa({
                ...licensa,
                validade: date?.toISOString() as string,
              })
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
