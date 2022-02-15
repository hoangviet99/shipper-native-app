import React, { useMemo } from 'react';
import { Box, Spinner } from 'native-base';
import { colorPalletter } from '@/assets/theme/color';
import { createStyles } from './style';

const LoadingComponent = () => {
  const styles = useMemo(() => {
    return createStyles();
  });

  return (
    <Box style={styles.container}>
      <Spinner size="lg" color={colorPalletter.lime[500]} />
    </Box>
  );
};

export default LoadingComponent;
