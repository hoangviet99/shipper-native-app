import { StyleSheet } from 'react-native';

export function createStyle() {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 24,
      paddingVertical: 24,
      justifyContent: 'center',
    },
    input: {
      marginBottom: 12,
    },
  });
}
