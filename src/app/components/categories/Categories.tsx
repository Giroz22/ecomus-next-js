import Link from "next/link";
import React from "react";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import { categories, typeCategory } from "./data/data";
import CardCategory from "./components/CardCategory";

function Categories() {
  return (
    <div className=" flex flex-col justify-evenly h-[70vh] bg-[#faf9f3] px-12 py-4">
      <div className="flex justify-between">
        <h3 className="text-4xl">Season Collection</h3>
        <Link
          href={"/categories"}
          className="text-sm border-b-2 border-gray-40 hover:scale-[1.1] hover:border-primary transition duration-300 ease-in-out"
        >
          View all categories <ArrowOutwardOutlinedIcon className="text-lg" />
        </Link>
      </div>
      <div className="w-full flex justify-around">
        {categories.map((category, index) => (
          <CardCategory key={category.title + index} {...category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
