import Image from "next/image";
import Link from "next/link";
import React from "react";
import { featuredType } from "../data/data";

function CardFeaturd({ title, srcImg, descount, hrefFeatured }: featuredType) {
  return (
    <Link
      href={hrefFeatured}
      className="h-[70vh] w-[30vw] relative overflow-hidden flex flex-col gap-8 justify-end items-center text-black group rounded-sm"
    >
      <Image
        src={srcImg}
        alt=""
        fill={true}
        className="absolute -z-10 group-hover:scale-[1.1] transition duration-300 ease-in-out object-cover"
      />
      <div className="flex flex-col gap-4 items-center">
        <span className="text-sm">Up to {descount}% OFF</span>
        <h3 className="text-3xl">{title}</h3>
      </div>
      <Link
        href={hrefFeatured}
        className="border-2 border-white py-2 px-4 mb-8 bg-white hover:border-b-black transition duration-300 ease-in-out"
      >
        Shop now
      </Link>
    </Link>
  );
}

export default CardFeaturd;
