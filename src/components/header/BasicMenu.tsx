import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { MenuItem } from "@mui/base";
import { redirect } from "next/navigation";
import Link from "next/link";

interface IBasicMenu {
  content: string;
  items: { url: string; content: string }[];
}

export default function BasicMenu({ content, items }: IBasicMenu) {
  return (
    <Dropdown>
      <MenuButton className="px-2 w-28 ">
        {content} <KeyboardArrowDownOutlinedIcon />
      </MenuButton>
      <Menu className="w-28 flex flex-col border">
        {items.map((item, index) => {
          return (
            <Link href={item.url} key={item.content + index}>
              <MenuItem className="w-full hover:bg-slate-200 p-2">
                {item.content}
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
    </Dropdown>
  );
}
