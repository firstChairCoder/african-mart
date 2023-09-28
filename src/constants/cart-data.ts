import type { ImageSourcePropType } from "react-native";

type ItemType = {
  id: string;
  img: ImageSourcePropType;
  item: string;
  price: number;
};

export const cartData: ItemType[] = [
  {
    id: "0",
    img: require("../../assets/images/asaro.png"),
    item: "Asaro (Yam Porridge)",
    price: 30
  },
  {
    id: "1",
    img: require("../../assets/images/moi-moi.png"),
    item: "Moi Moi (Bean Cake)",
    price: 30
  },
  {
    id: "2",
    img: require("../../assets/images/efo-riro.png"),
    item: "Efo Riro",
    price: 30
  }
];
