import { LogOutButton } from "../../LogOutButton/LogOutButton";

export const Header = () => {
  return (
    <div className="fixed flex h-[60px] w-full items-center justify-end bg-black px-2">
      <LogOutButton />
    </div>
  );
};
