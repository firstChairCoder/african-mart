import type { ImageSourcePropType } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import type { FC } from "react";

import { TrashIcon } from "./Icon";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    height: 32,
    justifyContent: "center",
    width: 32
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: 120,
    marginBottom: 32,
    minHeight: 120,
    padding: 20,
    paddingHorizontal: 12,
    width: "100%"
  },
  itemDetailsWrapper: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between"
  },
  amountWrapper: {
    alignItems: "flex-end",
    height: "130%",
    justifyContent: "space-between"
  },
  orderImage: { height: 92, width: 92 }
});

type IconName = keyof typeof Feather.glyphMap;
function AddMinusButton({ iconName }: { iconName: IconName }) {
  return (
    <View style={styles.btnContainer}>
      <Feather name={iconName} size={16} color={colors.black} />
    </View>
  );
}

interface CartItemProps {
  orderImage: ImageSourcePropType;
  orderName: string;
  orderAmount: number;
  orderPrice: number;
}

const CartItem: FC<CartItemProps> = ({
  orderImage,
  orderAmount,
  orderName,
  orderPrice
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={orderImage}
        resizeMode="contain"
        style={styles.orderImage}
      />
      <View style={styles.itemDetailsWrapper}>
        <Text style={{ fontFamily: "Medium", fontSize: 14, lineHeight: 20 }}>
          {orderName}
        </Text>
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 14,
            lineHeight: 20,
            color: colors.orange
          }}
        >
          {orderPrice ? `£${orderPrice}` : ""}
        </Text>
        <TrashIcon />
      </View>
      <View style={styles.amountWrapper}>
        <AddMinusButton iconName="minus" />
        <Text
          style={{
            fontFamily: "Medium",
            fontSize: 14,
            lineHeight: 20,
            color: colors.greyLight,
            textAlign: "center",
            width: "100%"
          }}
        >
          {orderAmount}
        </Text>
        <AddMinusButton iconName="plus" />
      </View>
    </View>
  );
};

export default CartItem;
