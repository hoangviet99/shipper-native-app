import React, { useMemo, useState, useEffect } from "react";
import { createStyles } from "./style";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useToast } from "native-base";
import Banknote from "@/components/Banknote/index";
import { getCurrencyString } from "@/helper/formater";
import { endTrip } from "@/services/endTrip/index";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { SCREENS_NAME } from "@/constants/screen";
import { style } from "styled-system";
import StatisticCardView from "@/components/StatisticCardView/index";

const StatisticScreen = () => {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const image = require("@/assets/images/imgBackground1.png");

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.parentBox}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.rowContainer}
            imageStyle={styles.parentBoxBackground}
          >
            <StatisticCardView
              title="Chuyến đi"
              iconName="today"
              value="3/3"
              unit="đơn"
              navToPage={SCREENS_NAME.TRIP_INFO}
            ></StatisticCardView>
            <StatisticCardView
              title="Năng suất"
              iconName="podium"
              value="76.9"
              unit="%"
              navToPage={SCREENS_NAME.PRODUCTIVITY}
              isCenter={true}
            ></StatisticCardView>
            <StatisticCardView
              title="Thu nhập"
              iconName="wallet"
              value="492.001"
              unit="VND"
            ></StatisticCardView>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

export default StatisticScreen;
