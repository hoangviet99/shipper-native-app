import React, { useMemo, useEffect, useState } from 'react';
import { Box, Text, Pressable } from 'native-base';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { CreateStyles } from './style';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useDispatch } from 'react-redux';
import { userAccountActions } from '@/store/userReducer';

const ListStreetNameDGBottomSheet = (props) => {
  const { modal, data } = props;

  const dispatch = useDispatch();

  const onClose = () => {
    modal.current?.close();
  };

  const styles = useMemo(() => {
    return CreateStyles();
  });

  const handleClickStreetName = (groupId, streetName) => {
    dispatch(userAccountActions.setGroupDG(groupId));
    dispatch(userAccountActions.setStreetNameDG(streetName));
    onClose();
  };

  const renderListStreetName = data?.map((item) => {
    return (
      <Pressable
        key={item.GroupID}
        onPress={() => handleClickStreetName(item.GroupID, item.Name)}
      >
        <Box style={styles.streetNameItem}>
          <Text>{item.Name}</Text>
        </Box>
      </Pressable>
    );
  });

  return (
    <Portal>
      <Modalize
        ref={modal}
        adjustToContentHeight={false}
        HeaderComponent={
          <Box style={styles.header}>
            <Text style={styles.headerText}>Địa chỉ đường</Text>

            <Pressable onPress={() => onClose()}>
              <Box>
                <FontAwesomeIcon icon={faTimes} size={18} />
              </Box>
            </Pressable>
          </Box>
        }
      >
        <Box style={styles.container}>{renderListStreetName}</Box>
      </Modalize>
    </Portal>
  );
};

export default ListStreetNameDGBottomSheet;
