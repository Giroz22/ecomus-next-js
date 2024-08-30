import { StaticImageData } from "next/image";

export interface typeProduct {
  id: string;
  name: string;
  price: number;
  img: StaticImageData | string;
  colors: string[];
}

export const products: typeProduct[] = [
  {
    id: "1",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/foto-gratis/hermosa-modelo-mujer-morena-hipster-sonriente-tirando-elegante-sueter-azul-verano-aislado-sobre-fondo-blanco_158538-13193.jpg?t=st=1725050702~exp=1725054302~hmac=6132baf17ef95bc12c88467150a15dee5757963f8f938cc9b12f6d606b2a1406&w=740",
    colors: ["f0800d", "010001"],
  },
  {
    id: "2",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/foto-gratis/retrato-joven-feliz-modelo-mujer-sonriente-maquillaje-brillante-labios-rojos-dos-coletas-ropa-sueter-calido-verano-aislado_158538-8729.jpg?t=st=1725050749~exp=1725054349~hmac=a066ceb930a22bbdaa1a13c1a953ad295cbb47f58ad1de0df21743622c1990e3&w=740",
    colors: ["987b46", "d967d8", "cbfed6"],
  },
  {
    id: "3",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/psd-gratis/vision-frontal-mujer-joven-posando-estudio_23-2150767236.jpg?t=st=1725051976~exp=1725055576~hmac=979720442ba53a5841321f485a988685d7341a892ef0f80f54926f07426bc5ae&w=740",
    colors: ["#987b46"],
  },
  {
    id: "4",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/foto-gratis/retrato-hermosa-mujer-morena-sexy-linda-feliz-labios-rojos-pijama-lenceria-sobre-fondo-blanco_158538-9438.jpg?t=st=1725052944~exp=1725056544~hmac=dad7c0dae4b5a592ff949e22d6dce22287b074003f162762a712888e29bf7d32&w=740",
    colors: ["f0800d", "010001"],
  },
  {
    id: "5",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/foto-gratis/retrato-joven-elegante-modelo-ropa-casual-verano-maquillaje-natural-gafas-sol-aislado_158538-8589.jpg?t=st=1725055638~exp=1725059238~hmac=615830205369739f76a0585655b50e6d90275071076083eda30a4c385447d835&w=740",
    colors: ["f0800d", "010001"],
  },
  {
    id: "6",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/foto-gratis/retrato-mujer-joven-elegante-hermosa-gafas-sol_158538-4110.jpg?t=st=1725055346~exp=1725058946~hmac=845e2464f6f70bdf88cdf75b2645a510c6939ca95e7de202da7f1357616afd66&w=360",
    colors: ["f0800d", "010001"],
  },
  {
    id: "7",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/foto-gratis/aspecto-alta-moda-glamour-elegante-hermosa-morena-joven-modelo-tela-brillante-hipster-verano-gorro-blanco-abrigo_158538-13880.jpg?t=st=1725055411~exp=1725059011~hmac=08491a43719fa418274eb6dbd8bb07207bb6a25bcb81862d487279aa303a4d53&w=360",
    colors: ["f0800d", "010001"],
  },
  {
    id: "8",
    name: "Ribbed Tank Top",
    price: 15.99,
    img: "https://img.freepik.com/foto-gratis/look-alta-moda-modelo-glamour-elegante-bella-mujer-joven-labios-rojos-verano-brillante-tela-hipster-colorida-gorro-negro_158538-9425.jpg?t=st=1725055566~exp=1725059166~hmac=39c05f2d8cb07938297bab97912f47f55e1da738e7d6307ea315f2df45ca387e&w=360",
    colors: ["f0800d", "010001"],
  },
];
