import { Button } from "@mui/base";
import React, { useState } from "react";

interface typeProps {
  category: string;
  isChecked: boolean;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

function BtnProductCategory({ category, isChecked, setCategory }: typeProps) {
  const handlerBtn = () => {
    setCategory((c) => (c = category));
  };

  return (
    <Button
      className={` text-xl ${
        isChecked ? "border-b-2 border-black text-black" : "text-gray-400"
      } transition duration-300 ease-in-out`}
      onClick={handlerBtn}
    >
      {category}
    </Button>
  );
}

export default BtnProductCategory;
