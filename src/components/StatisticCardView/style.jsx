import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    box: {
      backgroundColor: "white",
      width: WINDOW_WIDTH * 0.27,
      height: WINDOW_WIDTH * 0.39,
      borderRadius: 15,
      paddingLeft: 8,
      marginLeft: 4,
      marginRight: 4,
    },
    boxTitle: {
      height: "30%",
      justifyContent: "flex-end",
    },
    boxBody: {
      height: "35%",
      justifyContent: "center",
      paddingLeft: 4,
    },
    boxFooter: {
      height: "34%",
      justifyContent: "flex-start",
    },
    textTitle: {
      fontWeight: "bold",
    },
    textValue: {
      fontWeight: "bold",
      fontSize: 18,
      color: colorPalletter.lime[500],
    },
    textUnit: {
      fontSize: 12,
      color: colorPalletter.lime[500],
    },
  });
}
