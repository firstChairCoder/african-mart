import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "../constants/colors";

const AccordionCardItem = ({ item }: { item: string }) => {
  return (
    <View
      style={{
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: colors.greyDark,
        borderBottomWidth: 1,
        borderBottomColor: colors.greyDark,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Text style={{ paddingVertical: 12, fontFamily: "Medium", fontSize: 14 }}>
        {item}
      </Text>
      <Feather name="chevron-down" size={18} color={colors.black} />
    </View>
  );
};

export default AccordionCardItem;
