import React, { useMemo } from 'react';
import { Box } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainHeader = () => {
  const inset = useSafeAreaInsets();

  const styles = useMemo(() => {
    return createStyles();
  }, []);

  return (
    <Box style={styles.header} paddingTop={inset.top}>
      <Text>{'header nè'}</Text>
    </Box>
  );
};

function createStyles() {
  return StyleSheet.create({
    header: {
      height: 50,
      width: '100%',
      backgroundColor: 'green',
    },
  });
}
export default MainHeader;
