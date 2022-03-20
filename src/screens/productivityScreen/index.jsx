import React, { useMemo, useState, useEffect } from "react";
import { createStyles } from "./style";
import { ScrollView, View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useToast } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { SCREENS_NAME } from "@/constants/screen";
import ProductivityCardView from "@/components/ProductivityCardView/index";

function ProductivityScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>TỈ LỆ THÀNH CÔNG </Text>
          <Ionicons
              name={'information-circle-outline'}
              color={'red'}
              size={20}
            ></Ionicons>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.dateText}>21/12/2021</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ProductivityCardView
          title="Lấy hàng"
          value={15}
          max={18}
          color="darkblue"
        ></ProductivityCardView>
        <ProductivityCardView
          title="Giao hàng"
          value={112}
          max={147}
          color="orange"
        ></ProductivityCardView>
        <ProductivityCardView
          title="Trả hàng"
          value={0}
          max={0}
          color="darkred"
        ></ProductivityCardView>
      </View>
    </>
  );
}

export default ProductivityScreen;
