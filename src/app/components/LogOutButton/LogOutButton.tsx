"use client";

import { Button } from "../Button/Button";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";

export const LogOutButton = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <Button onClick={handleLogout} Icon={BiLogOut}>
      Sair
    </Button>
  );
};
