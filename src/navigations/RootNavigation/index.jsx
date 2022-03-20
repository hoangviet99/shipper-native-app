import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS_NAME } from "@/constants/screen";
import ListOrderDetailScreen from "@/screens/listOrderScreen";
import HomeNavigator from "@/navigations/HomeNavigator";
import DetailOrderWaitingScreen from "@/screens/detailOrderWaitingScreen";
import DetailOrderInfoScreen from "@/screens/detailOrderInfoScreen";
import DetailWaitingForItScreen from "@/screens/detailWaitingForItScreen";
import DetailOrderWaitingDeliveryScreen from "@/screens/detailOrderWatingDeliverySceen";
import DetailOrderDeliverdScreen from "@/screens/detailOrderDeliveredScreen";
import BarcodeScanScreen from "@/screens/barcodeScanScreen";
import EndTripScreen from "@/screens/endTripScreen";
import StatisticScreen from "@/screens/statisticScreen/index";
import SuccessInfoScreen from "@/screens/successInfoScreen/index";
import TripInfoScreen from "@/screens/tripInfoScreen/index";
import LoginScreen from "@/screens/userScreen/loginScreen";
import { Host } from "react-native-portalize";
import { useSelector, useDispatch } from "react-redux";
import { Pressable } from "native-base";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colorPalletter } from "@/assets/theme/color";
import { userAccountActions } from "@/store/userReducer";
import {
  useNavigation,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { Modal } from "react-native";
import PopupMenu from "@/components/PopupMenu";

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const codeLogin = useSelector((state) => state.userAccount.code);
  const navigationRef = createNavigationContainerRef();
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const handleMenuPress = () => {
    setModalVisible(true);
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <PopupMenu
          closePopupFunc={() => setModalVisible(!modalVisible)}
          code={codeLogin}
        ></PopupMenu>
      </Modal>
      <Host>
        <RootStack.Navigator
          screenOptions={() => ({
            headerRight: () => {
              return (
                <Pressable
                  style={{
                    paddingHorizontal: 12,
                  }}
                  onPress={() => handleMenuPress()}
                >
                  {/* <FontAwesomeIcon
                    icon={faSignOutAlt}
                    color={colorPalletter.lime[600]}
                    size={24}
                  /> */}
                  <Ionicons
                    name="reorder-four-outline"
                    color={colorPalletter.lime[600]}
                    size={24}
                  />
                </Pressable>
              );
            },
            headerLeft: () => null,
          })}
          initialRouteName={
            codeLogin ? SCREENS_NAME.LIST_ORDER : SCREENS_NAME.LOGIN
          }
        >
          <RootStack.Screen
            name={SCREENS_NAME.HOME_NAVIGATOR}
            component={HomeNavigator}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.LIST_ORDER}
            component={ListOrderDetailScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_ORDER_WAITING}
            component={DetailOrderWaitingScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_WAITING_FOR_IT}
            component={DetailWaitingForItScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_WAITING_DELIVEY}
            component={DetailOrderWaitingDeliveryScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_DELIVERD}
            component={DetailOrderDeliverdScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.LOGIN}
            component={LoginScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_ORDER_INFO}
            component={DetailOrderInfoScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.BARCODE_SCAN}
            component={BarcodeScanScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.END_TRIP}
            component={EndTripScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.STATISTIC}
            component={StatisticScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.SUCCESS_INFO}
            component={SuccessInfoScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.TRIP_INFO}
            component={TripInfoScreen}
          ></RootStack.Screen>
        </RootStack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default RootNavigation;
