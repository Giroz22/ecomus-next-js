import { StaticImageData } from "next/image";
import women from "../imgs/women.png";
import men from "../imgs/men.png";
import jewelry from "../imgs/jewelry.png";
import sneakers from "../imgs/sneakers.png";
import bags from "../imgs/bags.png";
import glasses from "../imgs/glasses.png";

export interface typeCategory {
  srcImg: StaticImageData;
  title: string;
  numItems: number;
  urlPage: string;
}

export const categories: typeCategory[] = [
  {
    srcImg: women,
    title: "Women's",
    numItems: 23,
    urlPage: "/women",
  },
  {
    srcImg: men,
    title: "Men's",
    numItems: 9,
    urlPage: "/men",
  },
  {
    srcImg: jewelry,
    title: "Jewelry",
    numItems: 31,
    urlPage: "/jewelry",
  },
  {
    srcImg: sneakers,
    title: "Sneakers",
    numItems: 21,
    urlPage: "/sneakers",
  },
  {
    srcImg: bags,
    title: "Bags",
    numItems: 5,
    urlPage: "/bags",
  },
  {
    srcImg: glasses,
    title: "Glasses",
    numItems: 14,
    urlPage: "/glasses",
  },
];
