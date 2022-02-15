import React, { useMemo } from 'react';
import { Box, Text } from 'native-base';
import { CreateStyles } from './style';
const EmptyListOrder = () => {
  const styles = useMemo(() => {
    return CreateStyles();
  }, []);

  return (
    <Box style={styles.container}>
      <Text>{'Bạn chưa có đơn hàng nào'}</Text>
    </Box>
  );
};

export default EmptyListOrder;
