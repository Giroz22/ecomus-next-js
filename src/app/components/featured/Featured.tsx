import React from "react";
import { features } from "./data/data";
import CardFeaturd from "./components/CardFeaturd";

function Featured() {
  return (
    <div className="flex justify-center items-center gap-6 px-6 py-16">
      {features.map((feature, index) => {
        return <CardFeaturd {...feature} />;
      })}
    </div>
  );
}

export default Featured;
