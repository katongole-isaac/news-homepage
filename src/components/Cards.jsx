import Card from "./Card";

import RetroImage from "../news-homepage-main/assets/images/image-retro-pcs.jpg";
import TopLaptopImage from "../news-homepage-main/assets/images/image-top-laptops.jpg";

import GammingImage from "../news-homepage-main/assets/images/image-gaming-growth.jpg";

export default function () {
  const cards = [
    {
      src: RetroImage,
      alt: "retro-pcs image",
      count: "01",
      boldText: "Reviving Retro PCs",
      smallText: " What happens when old PCs are given modern upgrades?",
    },
    {
      src: TopLaptopImage,
      alt: "top-laptop-image",
      count: "02",
      boldText: "Top 10 Laptops of 2022",
      smallText: " Our best picks for various needs and budgets.",
    },
    {
      src: GammingImage,
      alt: "gamming-image",
      count: "03",
      boldText: " The Growth of Gaming",
      smallText: "  How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <>
      {cards.map((cardItem, index) => (
        <Card key={cardItem.alt} {...cardItem} index={index} />
      ))}
    </>
  );
}
