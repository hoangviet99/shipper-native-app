import React, { useMemo, useEffect, useState } from "react";
import { Box, Text, Pressable, View, Image } from "native-base";
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
import { getCurrencyString } from "@/helper/formater";

export default TripInfoCardView = ({
  isDone = false,
  totalOrder = 2,
  collectedMoney = 2578000,
  uncollectedMoney = 0,
  tripId = "21C657CA6SD60",
}) => {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const imageDone = require("@/assets/images/imgDone.png");

  return (
    <>
      {isDone ? (
        <View style={[styles.container, styles.containerDone]}>
          <View style={styles.cardContainer}>
            <View style={[styles.cardHeader, styles.cardHeaderDone]}>
              <View style={styles.headerLeft}>
                <Text
                  style={[styles.textHeaderLeft, styles.textHeaderLeftDone]}
                >
                  {tripId}
                </Text>
              </View>
              <View style={styles.headerRight}>
                <Text style={styles.textHeaderRight}>Mã chuyến đi</Text>
                <Text style={[styles.textTripId, styles.textTripIdDone]}>
                  {tripId}
                </Text>
              </View>
            </View>
            <View style={styles.cardBodyDone}>
              <View style={styles.bodyLeft}>
                <Text style={styles.textBodyLeft}>Tổng đơn</Text>
                <Text style={styles.textBodyLeft}>Đã thu</Text>
              </View>
              <View style={styles.bodyRight}>
                <Text style={styles.textBodyRight}>{totalOrder}</Text>
                <Text style={styles.textBodyRight}>
                  {getCurrencyString(collectedMoney)} đ
                </Text>
              </View>
              <Image
                style={styles.imageDone}
                source={imageDone}
                resizeMode="cover"
                alt="..."
              ></Image>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <View style={styles.headerLeft}>
                <Text style={styles.textHeaderLeft}>Chưa thu tiền</Text>
              </View>
              <View style={styles.headerRight}>
                <Text style={styles.textHeaderRight}>Mã chuyến đi</Text>
                <Text style={styles.textTripId}>{tripId}</Text>
              </View>
            </View>
            <View style={styles.cardBodyNotDone}>
              <View style={styles.bodyLeft}>
                <Text style={styles.textBodyLeft}>Tổng đơn</Text>
                <Text style={styles.textBodyLeft}>Đã thu KH</Text>
                <Text
                  style={[styles.textBodyLeft, styles.textBodyUncollectedMoney]}
                >
                  Chưa thu KH
                </Text>
              </View>
              <View style={styles.bodyRight}>
                <Text style={styles.textBodyRight}>{totalOrder}</Text>
                <Text style={styles.textBodyRight}>
                  {getCurrencyString(collectedMoney)} đ
                </Text>
                <Text
                  style={[
                    styles.textBodyRight,
                    styles.textBodyUncollectedMoney,
                  ]}
                >
                  {getCurrencyString(uncollectedMoney)} đ
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
