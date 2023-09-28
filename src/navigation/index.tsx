/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Pressable, useWindowDimensions, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { AccountScreen, CartScreen, HomeScreen, MenuScreen } from "../screens";
import { colors } from "../constants/colors";
import { AccountIcon, CartIcon, HomeIcon, MenuIcon } from "../components";

const Tab = createBottomTabNavigator();
export default function MainNavigator() {
  const { height } = useWindowDimensions();
  console.log(0.15 * height);

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
          component={MenuScreen}
          options={{ tabBarIcon: ({ color }) => <MenuIcon color={color} /> }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerLeft: () => (
              <Pressable
                onPress={() => true}
                style={{
                  height: 36,
                  width: 36,
                  borderRadius: 8,
                  borderColor: colors.greyDark,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: colors.white,
                  marginLeft: 16
                  // marginBottom: 16
                }}
              >
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

// function TabBarIcon(props: {
//   name: ReactNode;
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }
