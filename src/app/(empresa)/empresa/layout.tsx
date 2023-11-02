import "~/styles/globals.css";
import { Header } from "~/app/components/Layout/Header/Header";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="flex h-screen w-full flex-col items-center justify-center gap-12 p-20 text-base text-black">
        {children}
      </main>
    </div>
  );
}
