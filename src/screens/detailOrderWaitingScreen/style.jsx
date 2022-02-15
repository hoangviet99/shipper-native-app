import { StyleSheet, Dimensions } from 'react-native';
import { colorPalletter } from '@/assets/theme/color';

const WINDOW_WIDTH = Dimensions.get('window').width;

export function createStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 8,
    },
    sellerInfoSection: {
      borderBottomColor: colorPalletter.gray['300'],
      borderBottomWidth: 1,
      paddingVertical: 8,
      width: WINDOW_WIDTH,
    },
    sellerInfoPhoneTxt: {
      color: colorPalletter.amber[500],
      fontWeight: 'bold',
      fontSize: 16,
      paddingBottom: 4,
    },
    sellerInfoTitle: {
      fontSize: 16,
      paddingBottom: 4,
    },
    sellerInfoName: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 4,
    },
    sellerInfoAddress: {
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 8,
    },
    orderItem: {
      borderBottomColor: colorPalletter.gray['300'],
      borderBottomWidth: 1,
      paddingVertical: 16,
      width: WINDOW_WIDTH,
    },
    orderItemTitleBox: {
      display: 'flex',
      flexDirection: 'row',
    },
    orderItemTitle: {
      fontSize: 16,
      marginBottom: 4,
      marginLeft: 8,
    },
    orderTitleBold: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colorPalletter.amber[500],
    },
    btnGroupBottom: {
      backgroundColor: colorPalletter.lime[600],
      marginHorizontal: -16,
      marginBottom: -16,
    },
    btnGroupInner: {
      display: 'flex',
      flexDirection: 'row',
      height: 42,
      alignItems: 'center',
      width: WINDOW_WIDTH,
    },
    btnGroupButtonTitle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      height: 42,
      color: 'white',
    },
    btnGroupButtonTitleInner: {
      color: 'white',
      fontSize: 15,
    },
    btnInner1: {
      width: '50%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      borderRightColor: 'white',
      borderRightWidth: 1,
    },
    btnInner2: {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
    },
    btnTextTitleInner: {
      color: 'white',
      fontSize: 15,
    },
    btnTextTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    orderStatusSection: {
      paddingVertical: 8,
    },
    orderStatusTitle: {
      fontSize: 16,
    },
    orderStatusTitleBold: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colorPalletter.lime[500],
    },
  });
}
