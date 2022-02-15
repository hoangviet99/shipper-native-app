import { StyleSheet } from 'react-native';
import { colorPalletter } from '@/assets/theme/color';

export function CreateStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  });
}
