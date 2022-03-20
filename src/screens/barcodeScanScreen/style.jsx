import { StyleSheet, Dimensions } from "react-native";
import { colorPalletter } from "@/assets/theme/color";

const WINDOW_WIDTH = Dimensions.get("window").width;
export function createStyles() {
  return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
  });
}
