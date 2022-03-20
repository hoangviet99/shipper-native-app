import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";
import { paddingTop } from "styled-system";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    footerView: {
      width: WINDOW_WIDTH,
      display: 'flex',
      paddingTop: 10,
      paddingBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colorPalletter.gray[500],
      backgroundColor: 'white',
    },
    footerText: {
      width: WINDOW_WIDTH,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      color: colorPalletter.gray[700],
    },
    submitButton: {
      width: WINDOW_WIDTH*0.5,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
      borderRadius: 8,
      color: 'white',
      borderWidth: 1,
      borderColor: colorPalletter.gray[500],
      backgroundColor: colorPalletter.green[500],
    },
    submitButtonDisable: {
      width: WINDOW_WIDTH*0.5,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
      borderRadius: 8,
      color: 'white',
      borderWidth: 1,
      borderColor: colorPalletter.gray[500],
      backgroundColor: colorPalletter.gray[400],
    },
  });
}
