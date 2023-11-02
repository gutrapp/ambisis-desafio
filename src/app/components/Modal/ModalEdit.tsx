import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

type ModalProps = {
  open: boolean;
  Icon?: React.ElementType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  children: React.ReactNode;
};

export const ModalEdit = ({ open, setOpen, children }: ModalProps) => {
  return (
    open && (
      <div className="fixed inset-0 z-40 flex h-screen items-center justify-center bg-black bg-opacity-70 text-black backdrop-blur-sm">
        <div className="h-fit w-[500px] rounded-md bg-white px-10 py-5 ring-2 ring-white ring-offset-2">
          <div>
            <button onClick={() => setOpen(!open)} className="text-[#6C5873V]">
              <IoMdCloseCircleOutline size={30} />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    )
  );
};
