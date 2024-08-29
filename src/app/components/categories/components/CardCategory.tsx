import Image from "next/image";
import React from "react";

import { typeCategory } from "../data/data";
import Link from "next/link";

function CardCategory({ srcImg, title, numItems, urlPage }: typeCategory) {
  return (
    <div className="flex flex-col gap-2 hover:scale-[1.1] transition duration-300 ease-in-out">
      <Link
        href={urlPage}
        className="rounded-full overflow-hidden bg-white hover:bg-[#eff0e0] transition duration-300 ease-in-out"
      >
        <Image
          src={srcImg}
          alt="Image product"
          fill={false}
          className="h-44 w-44 object-cover"
        />
      </Link>
      <div className="flex flex-col items-center">
        <span className="">{title}</span>
        <span className="text-xs text-gray-500">{numItems} items</span>
      </div>
    </div>
  );
}

export default CardCategory;
