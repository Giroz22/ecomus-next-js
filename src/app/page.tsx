import Header from "@/components/header/Header";
import Marquee from "@/components/marquee/Marquee";
import Banner from "./components/banner/Banner";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Benefits from "./components/Benefits";
import Ubication from "./components/Ubication";
import Brands from "./components/Brands";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Marquee />
      <Header />
      <Banner />
      <Categories />
      <Products />
      <Featured />
      <Benefits />
      <Ubication />
      <Brands />
      <Footer />
    </>
  );
}
