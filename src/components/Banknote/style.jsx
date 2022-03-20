import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";

const WINDOW_WIDTH = Dimensions.get("window").width;

export function createStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    txtBanknote: {
      width: 0.45*WINDOW_WIDTH,
      height: 0.13*WINDOW_WIDTH,
      borderColor: colorPalletter.gray[500],
      borderWidth: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      textAlignVertical: 'center',
      marginTop: 4,
      marginBottom: 4,
    },
    btnDecrease : {
      width: 0.13*WINDOW_WIDTH,
      height: 0.13*WINDOW_WIDTH,
      backgroundColor: colorPalletter.red[400],
      borderColor: colorPalletter.gray[500],
      borderWidth: 1,
      marginLeft: 4,
      alignContent: 'center',
      justifyContent: 'center',
    },
    btnIncrease : {
      width: 0.13*WINDOW_WIDTH,
      height: 0.13*WINDOW_WIDTH,
      backgroundColor: colorPalletter.green[500],
      borderColor: colorPalletter.gray[500],
      borderWidth: 1,
      marginLeft: 4,
      alignContent: 'center',
      justifyContent: 'center',
    },
    btnText : {
      width: 0.13*WINDOW_WIDTH,
      height: 0.13*WINDOW_WIDTH,
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    txtAmount : {
      width: 0.13*WINDOW_WIDTH,
      height: 0.13*WINDOW_WIDTH,
      borderColor: colorPalletter.gray[500],
      borderWidth: 1,
      marginLeft: 4,
      fontSize: 16,
      fontWeight: 'bold',
      color: colorPalletter.gray[600],
      textAlign: 'center',
      textAlignVertical: 'center',
    }
  });
}
