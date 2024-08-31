export interface featuredType {
  title: string;
  srcImg: string;
  descount: number;
  hrefFeatured: string;
}

export const features: featuredType[] = [
  {
    title: "Essential Basics",
    srcImg:
      "https://img.freepik.com/foto-gratis/retrato-hermosa-mujer-morena-sensual-chica-elegante-ropa-clasica-blanca-pantalones-anchos-sobre-fondo-blanco_158538-9428.jpg?t=st=1725066441~exp=1725070041~hmac=445587b0dff773c110affb4b520859568dd021e7ac6644b4ae459f2b96052f2f&w=740",
    descount: 30,
    hrefFeatured: "/",
  },
  {
    title: "Athleisure Wear",
    srcImg:
      "https://img.freepik.com/foto-gratis/gafas-montura-ligeramente-redondeada_23-2150670748.jpg?t=st=1725066525~exp=1725070125~hmac=775c2063ecb245c6f3072ff00f5f37ae945eda9fba4fae65af6826fd35277e24&w=826",
    descount: 35,
    hrefFeatured: "/",
  },
  {
    title: "Seasonal Favorites",
    srcImg:
      "https://img.freepik.com/foto-gratis/pequeno-bolso-estudio-naturaleza-muerta_23-2151046497.jpg?t=st=1725065536~exp=1725069136~hmac=43a10d70e8e25643a5073d56ff6006a16dc0ef23a503da182cca11dc4d83dc5d&w=826",
    descount: 40,
    hrefFeatured: "/",
  },
];
