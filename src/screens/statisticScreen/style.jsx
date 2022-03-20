import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";
import { paddingTop } from "styled-system";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: "white",
    },
    parentBox: {
      width: WINDOW_WIDTH * 0.95,
      height: WINDOW_WIDTH * 0.5,
      marginLeft: WINDOW_WIDTH * 0.025,
      marginTop: 16,
      borderRadius: 20,
    },
    parentBoxBackground: {
      width: WINDOW_WIDTH * 0.95,
      height: WINDOW_WIDTH * 0.5,
      borderRadius: 20,
    },
    rowContainer: {
      flex: 1,
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "white",
      width: WINDOW_WIDTH * 0.27,
      height: WINDOW_WIDTH * 0.39,
      borderRadius: 15,
      paddingLeft: 8,
    },
    boxCenter: {
      marginLeft: 8,
      marginRight: 8,
    },
  });
}
