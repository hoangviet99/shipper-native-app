import { colorPalletter } from "@/assets/theme/color";
import { StyleSheet } from "react-native";

export function createStyle() {
  return StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: "white",
      paddingHorizontal: 24,
      paddingVertical: 24,
      justifyContent: "center",
    },
    input: {
      marginBottom: 12,
    },
    btnSubmit: {
      backgroundColor: colorPalletter.lime[500],
    },
  });
}
