/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AccountScreen,
  CartScreen,
  DetailsScreen,
  HomeScreen,
  MainMenuScreen
} from "../screens";
import { colors } from "../constants/colors";
import { AccountIcon, CartIcon, HomeIcon, MenuIcon } from "../components";

const styles = StyleSheet.create({
  headerBtn: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.greyDark,
    borderRadius: 8,
    height: 36,
    justifyContent: "center",
    marginLeft: 16,
    width: 36
  }
});

const { Navigator, Screen } = createNativeStackNavigator();
function MenuStack() {
  return (
    <Navigator>
      <Screen
        name="MainMenu"
        component={MainMenuScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false, presentation: "fullScreenModal" }}
      />
    </Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function MainNavigator() {
  const { height } = useWindowDimensions();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.orange,
          tabBarLabelStyle: { fontFamily: "Regular", fontSize: 14 },
          headerTitleStyle: { fontFamily: "Medium" },
          tabBarStyle: { height: 107, maxHeight: 0.15 * height }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} /> }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuStack}
          options={{ tabBarIcon: ({ color }) => <MenuIcon color={color} /> }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerLeft: () => (
              <Pressable onPress={() => true} style={styles.headerBtn}>
                {({ pressed }) => (
                  <Feather
                    name="chevron-left"
                    size={20}
                    color={colors.black}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            ),
            headerBackground: () => (
              <View style={{ flex: 1, backgroundColor: colors.greyLighter }} />
            ),
            tabBarIcon: ({ color }) => <CartIcon color={color} />
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{ tabBarIcon: () => <AccountIcon /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
