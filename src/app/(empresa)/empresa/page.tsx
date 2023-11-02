import { TabelaEmpresas } from "~/app/components/TabelaEmpresas/TabelaEmpresas";

export default function Empresas() {
  return (
    <div className="h-full w-full rounded-md border p-20">
      <h1 className="mb-12 text-4xl font-bold text-black">Empresas</h1>
      <TabelaEmpresas />
    </div>
  );
}
