import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WaitForItTab from '@/screens/listOrderScreen/waitForItTab';
import WaitForDeliveryTab from '@/screens/listOrderScreen/waitForDeliveryTab';
import DeliveredTab from '@/screens/listOrderScreen/deliveredTab';
import ReturnGoodTab from '@/screens/listOrderScreen/returnsGoodTab';
import BarcodeScanTab from '@/screens/listOrderScreen/barcodeScanTab';
import { Box } from 'native-base';
import { colorPalletter } from '@/assets/theme/color';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <Box
      style={{
        backgroundColor: 'blue',
        height: '100%',
      }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarPressColor: colorPalletter.lime[600],
          tabBarActiveTintColor: colorPalletter.lime[600],
          tabBarInactiveTintColor: '#000',
          tabBarIndicatorStyle: {
            backgroundColor: colorPalletter.lime[600],
          },
        }}
      >
        <Tab.Screen name="Chờ lấy" component={WaitForItTab} />
        <Tab.Screen name="Chờ giao" component={WaitForDeliveryTab} />
        <Tab.Screen name="Đã giao" component={DeliveredTab} />
        <Tab.Screen name="Trả lại" component={ReturnGoodTab} />
        <Tab.Screen name="Quét mã" component={BarcodeScanTab} />
      </Tab.Navigator>
    </Box>
  );
};

export default HomeNavigator;
