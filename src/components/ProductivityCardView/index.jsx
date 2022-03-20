import React, { useMemo, useEffect, useState } from "react";
import { Box, Text, Pressable, View } from "native-base";
import { createStyles } from "./style";
import { Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import { fontWeight, style } from "styled-system";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SCREENS_NAME } from "@/constants/screen";
import { useDispatch } from "react-redux";
import { userAccountActions } from "@/store/userReducer";
import ProgressCircle from "react-native-progress-circle";

export default StatisticCardView = ({
  title = "Lấy hàng",
  value = 15,
  percent = 99,
  color = "blue",
}) => {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const navigation = useNavigation();
  const WINDOW_WIDTH = Dimensions.get("window").width;

  return (
    <>
      <Pressable onPress={() => console.log(". . .")}>
        <View style={{ ...styles.box, backgroundColor: color }}>
          <View style={styles.boxBody}>
            <ProgressCircle
              percent={percent}
              radius={WINDOW_WIDTH * 0.095}
              borderWidth={6}
              color="#FFFFFF"
              shadowColor="#FECACACA"
              bgColor={color}
            >
              <Text style={styles.textPercent}>
                {percent.toString().split(".")[0]}%
              </Text>
            </ProgressCircle>
          </View>
          <View style={styles.boxFooter}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textValue}>
              {value}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};
