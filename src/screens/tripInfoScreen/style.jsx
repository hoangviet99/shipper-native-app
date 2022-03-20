import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";
import { fontWeight, paddingTop } from "styled-system";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: "white",
    },
    dateContainer: {
      backgroundColor: colorPalletter.lime[500],
      height: WINDOW_WIDTH * 0.2,
    },
    bodyContainer: {
      height: '100%',
    },
    datePicker: {
      backgroundColor: colorPalletter.lime[500],
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    dateTextPicker: {
      width: '90%',
      height: '50%',
      backgroundColor: 'white',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      color: colorPalletter.gray[700],
      borderRadius: 8,
    },
    dateText: {
      height: 48,
      fontWeight: 'bold',
      fontSize: 15,
      paddingLeft: 8,
      textAlignVertical: 'center',
    },
  });
}
