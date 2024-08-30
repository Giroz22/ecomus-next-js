import { Button } from "@mui/base";
import React, { useState } from "react";

interface typeProps {
  isChecked: boolean;
  color: string;
  handlerBtn: () => void;
}

function BtnColors({ isChecked, color, handlerBtn }: typeProps) {
  return (
    <Button
      className={`h-6 w-6 rounded-full flex justify-center items-center ${
        isChecked && "border-2 border-black"
      } transition duration-300 ease-in-out`}
      onClick={handlerBtn}
    >
      <div
        className="h-4/5 w-4/5 rounded-full"
        style={{ backgroundColor: `#${color}` }}
      ></div>
    </Button>
  );
}

export default BtnColors;
