import {
  FlatList,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { MenuCard } from "../components";
import { data } from "../constants/shop-data";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 16
  },
  search: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    flexDirection: "row",
    height: 40,
    paddingHorizontal: 20,
    width: "90%"
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.greyDark,
    borderRadius: 8,
    fontFamily: "Regular",
    fontSize: 14,
    height: 40,
    paddingLeft: "5%"
  }
});

export const MainMenuScreen = ({ navigation }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Feather
          name="search"
          size={20}
          color={colors.black}
          style={{ marginLeft: 0.1 * width }}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        bounces={false}
        renderItem={({ item: { img, item, price } }) => {
          return (
            <MenuCard
              image={img}
              itemName={item}
              {...{ price }}
              onPress={() => navigation.navigate("Details")}
            />
          );
        }}
      />
    </View>
  );
};
