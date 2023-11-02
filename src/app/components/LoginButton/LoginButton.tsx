"use client";

import { Button } from "../Button/Button";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  const handleLogin = () => {
    signIn("github", { callbackUrl: "/empresa" });
  };

  return <Button onClick={handleLogin}>Entrar</Button>;
};
