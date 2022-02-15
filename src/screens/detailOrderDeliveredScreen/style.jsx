import { StyleSheet, Dimensions } from 'react-native';
import { colorPalletter } from '@/assets/theme/color';

const WINDOW_WIDTH = Dimensions.get('window').width;
export function createStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 16,
    },
    guestInfoSection: {
      borderBottomColor: colorPalletter.gray[300],
      borderBottomWidth: 1,
      paddingBottom: 16,
    },
    guestInfoPhoneNumber: {
      color: colorPalletter.amber[500],
      fontWeight: 'bold',
      fontSize: 16,
      paddingBottom: 4,
    },
    guestInfoName: {
      paddingBottom: 2,
    },
    guestInfoAddr: {
      fontWeight: 'bold',
      paddingBottom: 2,
    },
    guestInfoStatusInner: {
      color: colorPalletter.lime[500],
      fontWeight: 'bold',
      marginBottom: 24,
    },
    priceSection: {
      borderBottomColor: colorPalletter.gray[300],
      borderBottomWidth: 1,
      paddingVertical: 16,
    },
    priceShipText: {
      paddingBottom: 2,
    },
    priceText1: {
      paddingBottom: 2,
    },
    summaryPrice: {
      color: colorPalletter.gray[800],
      fontWeight: 'bold',
      fontSize: 14,
    },
    summaryPriceNumber: {
      color: colorPalletter.amber[500],
      fontWeight: 'bold',
    },
    orderInfoSection: {
      borderBottomColor: colorPalletter.gray[300],
      borderBottomWidth: 1,
      paddingVertical: 16,
    },
    orderInfoTextTitle: {
      color: colorPalletter.gray[800],
      fontWeight: 'bold',
      paddingBottom: 2,
    },
    sellerInfoSecction: {
      paddingVertical: 16,
    },
    sellerInfoTitleInner: {
      marginBottom: 2,
    },
    sellerPhoneNumberInner: {
      color: colorPalletter.lime[500],
      fontWeight: 'bold',
      fontSize: 16,
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
  });
}
