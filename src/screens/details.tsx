/* eslint-disable max-len */
import { Feather } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";

import { colors } from "../constants/colors";
import { AccordionCardItem, CartButton, Dot } from "../components";
import { accordionData } from "../constants/accordion-data";
import { AddMinusButton } from "../components/cart-item";

const styles = StyleSheet.create({
  headerBtn: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.greyDark,
    borderRadius: 8,
    height: 36,
    justifyContent: "center",
    marginBottom: 32,
    width: 36
  }
});

const detail = {
  title: "African Donut Mix (Puff Puff)",
  price: 3.99,
  description:
    "Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o..."
};

export const DetailsScreen = ({ navigation }: any) => {
  const { height, width } = useWindowDimensions();
  const slides = Array(3).fill("");
  const x = useSharedValue(0);
  const currentIndex = useDerivedValue(() => x.value / width);
  console.log(slides);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.greyLighter,
        paddingHorizontal: 20,
        paddingTop: 0.04 * height
      }}
    >
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Pressable onPress={() => navigation.goBack()} style={styles.headerBtn}>
          {({ pressed }) => (
            <Feather
              name="chevron-left"
              size={20}
              color={colors.black}
              style={{ opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>

        <View
          style={{
            width: "100%",
            height: 0.4 * height,
            backgroundColor: colors.white,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../assets/images/donut-mix-large.png")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            marginTop: 4
          }}
        >
          {slides.map((_, index) => {
            return (
              <Dot
                key={index.toString()}
                currentIndex={currentIndex}
                {...{ index }}
              />
            );
          })}
        </View>
        <View style={{ paddingBottom: 0.04 * height }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 8
            }}
          >
            <Text style={{ fontFamily: "Medium", fontSize: 16, width: "80%" }}>
              {detail.title}
            </Text>
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
                color: colors.orange
              }}
            >
              £{detail.price}
            </Text>
          </View>
          <Text
            numberOfLines={5}
            style={{
              fontSize: 12,
              fontFamily: "Regular",
              color: colors.greyLight
            }}
          >
            {detail.description}
            <Text>Read more</Text>
          </Text>
        </View>

        {accordionData.map((item) => {
          return <AccordionCardItem key={item.toString()} {...{ item }} />;
        })}

        <View
          style={{
            height: 200,
            width: "100%",
            marginTop: 40
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24
            }}
          >
            <AddMinusButton
              iconName="minus"
              style={{ width: 48, height: 48, marginBottom: 24 }}
            />
            <Text
              style={{
                fontFamily: "SemiBold",
                fontSize: 14,
                height: "50%"
              }}
            >
              1
            </Text>
            <AddMinusButton
              iconName="plus"
              style={{ width: 48, height: 48, marginBottom: 24 }}
            />
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 24,
              alignSelf: "center",
              flex: 1
            }}
          >
            <CartButton
              size="large"
              label="Add to cart"
              style={{ width: "100%", marginBottom: 48 + 16 }}
              textStyle={{ fontFamily: "Medium", fontSize: 14 }}
            />
            <CartButton
              size="large"
              label="Subscribe to a Plan"
              style={{
                width: "100%",
                backgroundColor: colors.white,
                borderColor: colors.orange,
                borderWidth: 1
              }}
              textStyle={{
                fontFamily: "Medium",
                fontSize: 14,
                color: colors.orange
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
