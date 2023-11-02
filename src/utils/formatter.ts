export const cnpjFormatacao = (value: string) => {
  if (!value) return null;
  if (!value.match(/[0-9]+/)) return null;
  return value.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5",
  );
};

export const cepFormatacao = (value: string) => {
  if (!value) return "";
  if (!value.match(/[0-9]+/)) return "";
  return value.replace(/(\d{5})(\d{3})/, "$1-$2");
};
