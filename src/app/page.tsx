import { getServerSession } from "next-auth";
import { LoginButton } from "./components/LoginButton/LoginButton";
import { authOptions } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/empresa");

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-12 p-20 text-black">
      <h1 className="text-2xl font-medium">
        Parece que você não esta logado, entre em sua conta para acessar suas
        empresas
      </h1>
      <LoginButton />
    </main>
  );
}
