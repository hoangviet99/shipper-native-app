import React, { useMemo, useState, useEffect } from "react";
import { createStyles } from "./style";
import { ScrollView, View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useToast } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { SCREENS_NAME } from "@/constants/screen";
import ProductivityCardView from "@/components/ProductivityCardView/index";
import { statisticSuccessInfo } from "@/services/statistic/index";
import DateTimePicker from "@react-native-community/datetimepicker";

function SuccessInfoScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const arrColor = ["darkblue", "orange", "darkred"];
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const code = useSelector((state) => state.userAccount.code);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dateStr = getDateString(date, "-");
    statisticSuccessInfo({ code: code, dateStr: dateStr }).then((res) => {
      if (res.ok) {
        setData(res.data?.List);
      }
    });
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const getDateString = (date, sliceChar = "/") => {
    let dateStr = date.toISOString().split("T")[0];
    let dateObj = dateStr.split("-");

    return `${dateObj[2]}${sliceChar}${dateObj[1]}${sliceChar}${dateObj[0]}`;
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>TỈ LỆ THÀNH CÔNG </Text>
          <Pressable onPress={() => alert('Cho biết tỉ lệ thành công của các chuyến giao hàng.')}>
            <Ionicons
              name={"information-circle-outline"}
              color={"red"}
              size={20}
            ></Ionicons>
          </Pressable>
        </View>
        <View style={styles.headerRight}>
          <Pressable onPress={() => setShow(true)}>
            <Text style={styles.dateText}>{getDateString(date)}</Text>
          </Pressable>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>
      <View style={styles.bodyContainer}>
        {data.map((item, i) => (
          <ProductivityCardView
            key={item?.Name}
            title={item?.Name}
            value={item?.Value}
            percent={parseInt(item?.Percent)}
            color={arrColor[i]}
          ></ProductivityCardView>
        ))}
      </View>
    </>
  );
}

export default SuccessInfoScreen;
