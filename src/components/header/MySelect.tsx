import { Option, Select } from "@mui/base";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

interface MySelectProps {
  myValues: { value: string; content: string }[];
  myOnChange: (value: string | null) => void;
}

function MySelect({ myValues, myOnChange }: MySelectProps) {
  return (
    <Select
      className="bg-white p-1"
      defaultValue={myValues[0].value}
      onChange={(_, valueSelect) => myOnChange(valueSelect)}
    >
      {myValues.map((opc, index) => {
        return (
          <Option
            key={opc.value + index}
            value={opc.value}
            className="bg-white hover:bg-primary hover:text-white p-1 border even:border-t-0 "
          >
            {opc.content}
          </Option>
        );
      })}
    </Select>
  );
}

export default MySelect;
