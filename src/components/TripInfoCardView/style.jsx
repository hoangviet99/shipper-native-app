import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";

const WINDOW_WIDTH = Dimensions.get("window").width;
const CARD_BORDER_RADIUS = 8;

export function createStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: "white",
      width: "100%",
      height: WINDOW_WIDTH * 0.5,
      alignItems: "center",
      justifyContent: "center",
    },
    containerDone: {
      height: WINDOW_WIDTH * 0.4,
    },
    cardContainer: {
      backgroundColor: colorPalletter.gray[200],
      width: "93%",
      height: "93%",
      borderRadius: CARD_BORDER_RADIUS,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    cardHeader: {
      backgroundColor: colorPalletter.gray[50],
      height: "35%",
      borderTopLeftRadius: CARD_BORDER_RADIUS,
      borderTopRightRadius: CARD_BORDER_RADIUS,
      borderColor: colorPalletter.gray[200],
      borderBottomColor: "transparent",
      borderWidth: 1,
      flexDirection: "row",
    },
    cardHeaderDone: {
      height: "40%",
      borderWidth: 0,
    },
    cardBodyNotDone: {
      backgroundColor: colorPalletter.red[50],
      height: "65%",
      borderBottomLeftRadius: CARD_BORDER_RADIUS,
      borderBottomRightRadius: CARD_BORDER_RADIUS,
      borderLeftWidth: 8,
      borderColor: colorPalletter.red[400],
      flexDirection: "row",
    },
    cardBodyDone: {
      backgroundColor: colorPalletter.gray[50],
      height: "60%",
      borderBottomLeftRadius: CARD_BORDER_RADIUS,
      borderBottomRightRadius: CARD_BORDER_RADIUS,
      borderTopWidth: 1,
      borderTopColor: colorPalletter.gray[200],
      flexDirection: "row",
    },
    headerLeft: {
      width: "50%",
      height: "100%",
      borderTopLeftRadius: CARD_BORDER_RADIUS,
      paddingLeft: 12,
      paddingTop: 8,
    },
    textHeaderLeft: {
      backgroundColor: colorPalletter.red[500],
      borderRadius: 4,
      alignSelf: "flex-start",
      fontWeight: "bold",
      color: "white",
      fontSize: 12,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 2,
      paddingBottom: 2,
    },
    textHeaderLeftDone: {
      backgroundColor: colorPalletter.lime[500],
    },
    headerRight: {
      width: "50%",
      height: "100%",
      borderTopRightRadius: CARD_BORDER_RADIUS,
      paddingRight: 12,
      paddingTop: 8,
      alignItems: "flex-end",
    },
    textHeaderRight: {
      fontSize: 12,
      color: colorPalletter.gray[500],
      fontWeight: "bold",
    },
    textTripId: {
      fontSize: 15,
      color: colorPalletter.blue[400],
      fontWeight: "bold",
    },
    textTripIdDone: {
      color: colorPalletter.gray[900],
    },
    bodyLeft: {
      width: "50%",
      height: "100%",
      paddingLeft: 13,
      justifyContent: "center",
    },
    bodyRight: {
      width: "50%",
      height: "100%",
      borderBottomRightRadius: CARD_BORDER_RADIUS,
      paddingRight: 8,
      alignItems: "flex-end",
      justifyContent: "center",
    },
    textBodyLeft: {
      color: colorPalletter.gray[600],
      fontSize: 15,
      marginBottom: 4,
    },
    textBodyRight: {
      color: colorPalletter.gray[800],
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 4,
    },
    textBodyUncollectedMoney: {
      color: colorPalletter.red[500],
    },
    imageDone: {
      width: 105,
      height: 55,
      position: "absolute",
      alignSelf: "center",
      left: "35%",
    },
  });
}
