"use client";

import React, { useState } from "react";

//css
import "@/components/marquee/marquee.css";

//Components
import { IconButton } from "@mui/material";

//Data
import { data } from "@/components/marquee/data";

//Icon
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

function Marquee() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <>
      {showComponent && (
        <div className="w-screen bg-primary text-primaryWhite text-sm flex items-center">
          <div className="text-slider flex-1 flex">
            {Array.from({ length: 3 }).map((_, i) => {
              return (
                <div key={"text-content" + i} className="text-content flex">
                  {data.map((item, j) => {
                    return (
                      <div key={"text-" + j}>
                        {item}
                        <RemoveIcon className="mx-6" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <IconButton
            onClick={() => setShowComponent(false)}
            aria-label="Close"
            className="text-primaryWhite mx-4"
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      )}
    </>
  );
}

export default Marquee;
