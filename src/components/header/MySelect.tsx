import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { ChangeEvent } from "react";

interface MySelectProps {
  myValues: { value: string; content: string }[];
  myOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function MySelect({ myValues, myOnChange }: MySelectProps) {
  return (
    <select
      className="border-none bg-transparent focus:outline-none"
      onChange={(e) => myOnChange(e)}
    >
      {myValues.map((opc, index) => {
        return (
          <option
            key={opc.value + index}
            value={opc.value}
            className="appearance-none"
          >
            {opc.content}
          </option>
        );
      })}
    </select>
  );
}

export default MySelect;
