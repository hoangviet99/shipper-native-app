import React, { useMemo, useState, useEffect } from "react";
import { createStyles } from "./style";
import { ScrollView, View, Text, Pressable, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useToast } from "native-base";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { SCREENS_NAME } from "@/constants/screen";
import ProductivityCardView from "@/components/ProductivityCardView/index";
import DateTimePicker from "@react-native-community/datetimepicker";
import TripInfoCardView from "@/components/TripInfoCardView/index";

function TripInfoScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const getDateString = (date) => {
    let dateStr = date.toISOString().split("T")[0];
    let dateObj = dateStr.split("-");

    return `${dateObj[2]}/${dateObj[1]}/${dateObj[0]}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Pressable onPress={() => setShow(true)}>
          <View style={styles.datePicker}>
            <Text style={styles.dateTextPicker}>{getDateString(date)}</Text>
          </View>
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
      <Text style={styles.dateText}>{getDateString(date)}</Text>
      <ScrollView style={styles.bodyContainer}>
        <TripInfoCardView></TripInfoCardView>
        <TripInfoCardView isDone={true}></TripInfoCardView>
        <TripInfoCardView></TripInfoCardView>
        <TripInfoCardView isDone={true}></TripInfoCardView>
        <TripInfoCardView isDone={true}></TripInfoCardView>
        <TripInfoCardView></TripInfoCardView>
        <TripInfoCardView></TripInfoCardView>
        <TripInfoCardView></TripInfoCardView>
        <View style={{ height: 150 }}></View>
      </ScrollView>
    </View>
  );
}

export default TripInfoScreen;
