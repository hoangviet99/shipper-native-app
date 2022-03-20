import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    box: {
      width: WINDOW_WIDTH * 0.29,
      height: WINDOW_WIDTH * 0.4,
      borderRadius: 15,
      marginLeft: 6,
      marginRight: 6,
    },
    boxBody: {
      height: "60%",
      justifyContent: "flex-end",
      alignItems: 'center',
      paddingLeft: 4,
    },
    boxFooter: {
      height: "40%",
      justifyContent: "flex-start",
    },
    textTitle: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
    },
    textValue: {
      fontSize: 14,
      color: 'white',
      textAlign: 'center',
    },
    textPercent: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
  });
}
