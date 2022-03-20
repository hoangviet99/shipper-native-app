import React, { useMemo, useEffect, useState } from "react";
import { Box, Text, Pressable, View } from "native-base";
import { createStyles } from "./style";
import { fontWeight, style } from "styled-system";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SCREENS_NAME } from "@/constants/screen";
import { useDispatch } from "react-redux";
import { userAccountActions } from "@/store/userReducer";

export default PopupMenu = ({
  curScreen = null,
  code = null,
  closePopupFunc = () => null,
}) => {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigatePressHandle = (screenName) => {
    navigation.navigate(screenName);
    closePopupFunc();
  };

  const handleLogout = () => {
    dispatch(userAccountActions.setCode(undefined));
    navigation.navigate(SCREENS_NAME.LOGIN);
    closePopupFunc();
  };

  const checkVisible = () => {
    try {
      const route = useRoute();
      console.log(route.name);
      return route.name;
    } catch (err) {
      console.log(err);
      return SCREENS_NAME.LIST_ORDER;
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => closePopupFunc()}>
      {code ? (
        <View style={styles.modalView}>
          <Text style={styles.title}>MENU</Text>
          <Pressable
            style={styles.buttonRow}
            onPress={() => navigatePressHandle(SCREENS_NAME.LIST_ORDER)}
          >
            <Text style={styles.textStyle}>{SCREENS_NAME.LIST_ORDER}</Text>
          </Pressable>

          <Pressable
            style={styles.buttonRow}
            onPress={() => navigatePressHandle(SCREENS_NAME.BARCODE_SCAN)}
          >
            <Text style={styles.textStyle}>{SCREENS_NAME.BARCODE_SCAN}</Text>
          </Pressable>

          <Pressable
            style={styles.buttonRow}
            onPress={() => navigatePressHandle(SCREENS_NAME.END_TRIP)}
          >
            <Text style={styles.textStyle}>Nộp tiền</Text>
          </Pressable>

          <Pressable
            style={styles.buttonRow}
            onPress={() => navigatePressHandle(SCREENS_NAME.STATISTIC)}
          >
            <Text style={styles.textStyle}>Thống kê</Text>
          </Pressable>

          <Pressable style={styles.buttonRow} onPress={() => handleLogout()}>
            <Text style={styles.textLogoutStyle}>Đăng xuất</Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </Pressable>
  );
};
