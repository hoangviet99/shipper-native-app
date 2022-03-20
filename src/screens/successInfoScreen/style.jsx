import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";
import { paddingTop } from "styled-system";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: "white",
    },
    headerContainer: {
      backgroundColor: 'white',
      height: WINDOW_WIDTH*0.15,
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    headerLeft: {
      width: WINDOW_WIDTH*0.6,
      height: '100%',
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 8,
    },
    headerRight: {
      width: WINDOW_WIDTH*0.4,
      height: '100%',
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingRight: 8,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 13,
    },
    dateText: {
      fontWeight: 'bold',
      fontSize: 14,
      color: colorPalletter.cyan[500],
    },
    bodyContainer: {
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "center",
    },
  });
}
