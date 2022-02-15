import { StyleSheet, Dimensions } from 'react-native';
import { colorPalletter } from '@/assets/theme/color';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export function createStyles() {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      backgroundColor: 'white',
      flex: 1,
      height: WINDOW_HEIGHT,
    },
    addrBtnSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 20,
      marginTop: 8,
      marginBottom: 8,
    },
    addrBtnText: {
      color: colorPalletter.warmGray[800],
      fontSize: 12,
    },
    listOrderItem: {
      borderWidth: 1,
      borderColor: colorPalletter.gray[300],
      padding: 16,
      marginBottom: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    listOrderItemTextPhone: {
      color: colorPalletter.amber[500],
      fontWeight: 'bold',
    },
  });
}
