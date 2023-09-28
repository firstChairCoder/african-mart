import { ScrollView, StyleSheet, Text, View } from "react-native";

import { colors } from "../constants/colors";
import { CartButton, CartItem } from "../components";
import { cartData } from "../constants/cart-data";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyLighter,
    borderColor: colors.greyDark,
    borderTopWidth: 1,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  footerTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingVertical: 12,
    width: "100%"
  },
  footerText: { fontFamily: "Regular", fontSize: 14, lineHeight: 20 },
  greyFooterText: { color: colors.greyLight, lineHeight: 20 }
});

export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 0.95 }}>
        {cartData.map((order) => {
          return (
            <CartItem
              key={order.id}
              orderImage={order.img}
              orderAmount={1}
              orderName={order.item}
              orderPrice={order.price}
            />
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerTextWrapper}>
          <Text style={styles.footerText}>
            Total <Text style={styles.greyFooterText}>(3 items)</Text>
          </Text>
          <Text style={styles.footerText}>£90</Text>
        </View>
        <CartButton
          size={"large"}
          label={"Checkout - £90"}
          style={{ position: "relative", width: "100%" }}
          textStyle={{ fontFamily: "Medium", fontSize: 14 }}
        />
      </View>
    </View>
  );
};
