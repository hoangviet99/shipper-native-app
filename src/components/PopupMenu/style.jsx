import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-end",
      // backgroundColor: 'black',
    },
    title: {
      fontWeight: "bold",
      paddingEnd: 8,
    },
    modalView: {
      margin: 8,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 25,
      alignItems: "flex-end",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonRow: {
      width: 0.45 * WINDOW_WIDTH,
      alignItems: "flex-end",
      padding: 4,
      borderRadius: 2,
      borderBottomWidth: 1,
      borderColor: colorPalletter.gray[700],
      marginBottom: 8,
    },
    textStyle: {
      color: colorPalletter.gray[600],
      fontWeight: "bold",
      textAlign: "center",
    },
    textLogoutStyle: {
      color: colorPalletter.red[500],
      fontWeight: "bold",
      textAlign: "center",
    },
  });
}
