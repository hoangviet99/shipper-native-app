import { StyleSheet } from 'react-native';
import { colorPalletter } from '@/assets/theme/color';

export function CreateStyles() {
  return StyleSheet.create({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 12,
      borderBottomColor: colorPalletter.gray[300],
      borderBottomWidth: 1,
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
      paddingHorizontal: 12,
    },
    streetNameItem: {
      paddingVertical: 12,
      paddingHorizontal: 4,
      height: 42,
      borderBottomColor: colorPalletter.gray[200],
      borderBottomWidth: 1,
    },
  });
}
