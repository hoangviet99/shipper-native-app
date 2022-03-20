import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import WaitForItTab from "@/screens/listOrderScreen/waitForItTab";
import WaitForDeliveryTab from "@/screens/listOrderScreen/waitForDeliveryTab";
import DeliveredTab from "@/screens/listOrderScreen/deliveredTab";
import ReturnGoodTab from "@/screens/listOrderScreen/returnsGoodTab";
import { Box } from "native-base";
import { colorPalletter } from "@/assets/theme/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { color } from "styled-system";

const TabTop = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarPressColor: colorPalletter.lime[600],
      //   tabBarActiveTintColor: colorPalletter.lime[600],
      //   tabBarInactiveTintColor: "#000",
      //   tabBarIndicatorStyle: {
      //     backgroundColor: colorPalletter.lime[600],
      //   },
      // }}
      activeColor={colorPalletter.lime[600]}
      inactiveColor={colorPalletter.gray[400]}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Chờ lấy"
        component={WaitForItTab}
        options={{
          tabBarLabel: "Chờ lấy",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cube-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chờ giao"
        component={WaitForDeliveryTab}
        options={{
          tabBarLabel: "Chờ giao",
          tabBarIcon: ({ color }) => (
            <Ionicons name="rocket-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Đã giao"
        component={DeliveredTab}
        options={{
          tabBarLabel: "Đã giao",
          tabBarIcon: ({ color }) => (
            <Ionicons name="checkmark-done-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Trả lại"
        component={ReturnGoodTab}
        options={{
          tabBarLabel: "Trả lại",
          tabBarIcon: ({ color }) => (
            <Ionicons name="refresh-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
