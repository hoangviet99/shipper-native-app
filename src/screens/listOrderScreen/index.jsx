import React from 'react';
import { Text, Box, Pressable } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeNavigator from '@/navigations/HomeNavigator';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ListOrderDetailScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <>
      <HomeNavigator />
    </>
  );
};

export default ListOrderDetailScreen;
