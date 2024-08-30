import React, { useState } from "react";
import { typeProduct } from "../data/data";
import Image from "next/image";
import { Button } from "@mui/base";
import BtnColors from "./BtnColors";

function CardProduct({ id, name, price, img, colors }: typeProduct) {
  const [colorActive, setColorActive] = useState(colors[0]);

  return (
    <div className="h-[60vh] w-[20vw] flex flex-col rounded-lg  border bg-[#faf9f3]">
      <Image
        src={img}
        alt={"image de " + name}
        width={600}
        height={600}
        className="h-3/4 w-full object-cover object-left-top"
      />
      <div className="flex-1 flex flex-col  gap-1 px-4 py-2">
        <span className="text-sm">{name}</span>
        <span className="text-sm">{price}</span>

        <div className="flex gap-2 mt-2">
          {colors.map((color, index) => {
            return (
              <BtnColors
                key={index + color}
                isChecked={colorActive == color}
                color={color}
                handlerBtn={() => {
                  setColorActive(color);
                  console.log("The color selected was " + color);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
