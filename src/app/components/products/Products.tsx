"use client";

import { Button } from "@mui/base";
import React from "react";
import { products } from "./data/data";
import CardProduct from "./components/CardProduct";
import BtnProductCategory from "./components/BtnProductCategory";

function Products() {
  const [categoryProduct, setCategoryProduct] = React.useState("Best seller");

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex items-center justify-center gap-8 py-14">
          <BtnProductCategory
            category={"Best seller"}
            isChecked={categoryProduct == "Best seller"}
            setCategory={setCategoryProduct}
          />
          <BtnProductCategory
            category={"New arrivals"}
            isChecked={categoryProduct == "New arrivals"}
            setCategory={setCategoryProduct}
          />
          <BtnProductCategory
            category={"On sale"}
            isChecked={categoryProduct == "On sale"}
            setCategory={setCategoryProduct}
          />
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 px-8">
          {products.map((product, index) => {
            return <CardProduct key={product.id} {...product} />;
          })}
        </div>
        <div className="m-auto mt-10">
          <Button
            className="border-2 border-black px-4 py-2 hover:border-primary hover:scale-[1.1] transition duration-300 ease-in-out"
            onClick={() => console.log(categoryProduct)}
          >
            Load more
          </Button>
        </div>
      </div>
    </>
  );
}

export default Products;
