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
import {
  statisticQuickInfo,
  statisticSuccessInfo,
  statisticTripInfo,
} from "@/services/statistic/index";
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
  const code = useSelector((state) => state.userAccount.code);

  const [data, setData] = useState([]);

  useEffect(() => {
    statisticQuickInfo(code).then((res) => {
      if (res.ok) {
        setData(res.data?.List);
      }
    });
  }, []);

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
              title={data[0]?.Name}
              iconName="today"
              value={data[0]?.Value}
              unit="đơn"
              navToPage={SCREENS_NAME.TRIP_INFO}
            ></StatisticCardView>
            <StatisticCardView
              title={data[1]?.Name}
              iconName="podium"
              value={data[1]?.Value}
              unit="%"
              navToPage={SCREENS_NAME.SUCCESS_INFO}
              isCenter={true}
            ></StatisticCardView>
            <StatisticCardView
              title={data[2]?.Name}
              iconName="wallet"
              value={data[2]?.Value}
              unit="VND"
            ></StatisticCardView>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

export default StatisticScreen;
