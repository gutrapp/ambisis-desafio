import "~/styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ambisis Desafio",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
