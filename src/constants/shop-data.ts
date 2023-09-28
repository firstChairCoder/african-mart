import type { ImageSourcePropType } from "react-native";

type ItemType = {
  id: string;
  img: ImageSourcePropType;
  item: string;
  price: number;
};

export const data: ItemType[] = [
  {
    id: "0",
    img: require("../../assets/images/donut-mix.png"),
    item: "African Doughnut Mix",
    price: 30
  },
  {
    id: "1",
    img: require("../../assets/images/efo-riro.png"),
    item: "Efo Riro",
    price: 30
  },
  {
    id: "2",
    img: require("../../assets/images/asaro.png"),
    item: "Asaro (Yam Porridge)",
    price: 30
  },
  {
    id: "3",
    img: require("../../assets/images/suya-beef.png"),
    item: "Chicken Stew",
    price: 30
  },
  {
    id: "4",
    img: require("../../assets/images/asaro.png"),
    item: "Asaro (Yam Porridge)",
    price: 30
  },
  {
    id: "5",
    img: require("../../assets/images/asaro.png"),
    item: "Asaro (Yam Porridge)",
    price: 30
  }
];
