"use client";

import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import React, { ChangeEvent } from "react";
import MySelect from "./MySelect";
import Link from "next/link";
import BasicMenu from "./BasicMenu";

interface eventTypes {
  event:
    | React.MouseEvent<Element, MouseEvent>
    | React.KeyboardEvent<Element>
    | React.FocusEvent<Element, Element>
    | null;
}

function Header() {
  return (
    <header className="flex flex-col bg-white">
      <div className="flex items-center justify-between py-2 px-4 border-solid border">
        <div className="flex gap-4">
          <MySelect
            myValues={[
              { value: "USD", content: "🇺🇸 USD" },
              { value: "COP", content: "🇨🇴 COP" },
            ]}
            myOnChange={(value) => console.log(value)}
          />
          <MySelect
            myValues={[
              { value: "english", content: "English" },
              { value: "spanish", content: "Spanish" },
            ]}
            myOnChange={(value) => console.log(value)}
          />
        </div>
        <div className="text-center text-4xl">
          <Link href="/asdsa">ecomus</Link>
        </div>
        <div className="">
          <IconButton
            onClick={() => {}}
            aria-label="Close"
            className="text-primaryWhite"
          >
            <SearchOutlinedIcon className="text-slate-400" />
          </IconButton>
          <IconButton
            onClick={() => {}}
            aria-label="Close"
            className="text-primaryWhite"
          >
            <PersonOutlinedIcon className="text-slate-400" />
          </IconButton>
          <IconButton
            onClick={() => {}}
            aria-label="Close"
            className="text-primaryWhite"
          >
            <FavoriteBorderOutlinedIcon className="text-slate-400" />
          </IconButton>
          <IconButton
            onClick={() => {}}
            aria-label="Close"
            className="text-primaryWhite"
          >
            <ShoppingBagOutlinedIcon className="text-slate-400" />
          </IconButton>
        </div>
      </div>
      <div className="flex justify-center py-4 ">
        <BasicMenu content="Home" items={[]} />
        <BasicMenu content="Shop" items={[]} />
        <BasicMenu
          content="Products"
          items={[
            { url: "/tshirt", content: "TShirts" },
            { url: "/hat", content: "Hat" },
          ]}
        />
        <BasicMenu content="Pages" items={[]} />
        <BasicMenu content="Blog" items={[]} />

        <button>Buy now</button>
      </div>
    </header>
  );
}

export default Header;
