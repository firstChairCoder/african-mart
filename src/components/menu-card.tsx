import { Feather } from "@expo/vector-icons";
import type { ImageSourcePropType } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import type { FC } from "react";

import { colors } from "../constants/colors";
import CartButton from "./button";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    height: 228,
    margin: 16,
    paddingTop: "8%",
    width: 156
  },
  heart: { position: "absolute", right: 12, top: 8 },
  imageWrapper: {
    alignItems: "center",
    height: "50%",
    justifyContent: "flex-start",
    padding: 8,
    width: "100%"
  },
  img: { alignSelf: "center", height: "90%", width: "90%" },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: "100%"
  }
});

interface MenuCardProps {
  image: ImageSourcePropType;
  itemName: string;
  price: number;
  btnLabel?: string;
}

const MenuCard: FC<MenuCardProps> = ({
  image,
  itemName,
  price,
  btnLabel = "Add to cart"
}) => {
  return (
    <View style={styles.container}>
      <Feather
        name="heart"
        size={24}
        color={colors.greyLight}
        style={styles.heart}
      />
      <View style={styles.imageWrapper}>
        <Image source={image} resizeMode="contain" style={styles.img} />
      </View>

      <View style={styles.textWrapper}>
        <Text
          style={{
            color: colors.black,
            fontFamily: "Medium",
            fontSize: 14,
            width: "60%"
          }}
          numberOfLines={1}
        >
          {itemName}
        </Text>
        <Text
          style={{ color: colors.orange, fontFamily: "Medium", fontSize: 14 }}
        >
          {price ? `£ ${price}` : ""}
        </Text>
      </View>

      <CartButton size="small" label={btnLabel} />
    </View>
  );
};

export default MenuCard;
