import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center"
  }
});

export const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the account screen!</Text>
    </View>
  );
};
