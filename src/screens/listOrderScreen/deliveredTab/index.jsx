import React, { useMemo, useEffect, useState, useRef } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';
import { getListWaitDelivered } from '@/services';
import LoadingComponent from '@/components/Loading/index';
import ListStreetNameDGBottomSheet from '@/components/ListStreetNameDG';
import EmptyListOrder from '@/components/EmptyListOrder';
import { userAccountActions } from '@/store/userReducer';
import { getListStreetNameDG } from '@/services/getListAddress';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { listOrderActions } from '@/store/listOrderReducer';

function DeliveredScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const modalRef = useRef(null);
  const onOpen = () => {
    modalRef.current?.open();
  };

  const navigation = useNavigation();

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();
  const [isEmptyListOrder, setIsEmptyListOrder] = useState(false);
  const [listStreets, setListStreet] = useState();
  const [streetName, setStreetName] = useState('');
  const dispatch = useDispatch();

  const code = useSelector((state) => state.userAccount.code);
  const groupId = useSelector((state) => state.userAccount.groupDG);
  const streetNameFromRedux = useSelector((state) => state.userAccount.streetNameDG);
  const isReGettingData = useSelector((state) => state.listOrder.isReloadGettingDataDG);

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListStreetNameDG({ code: code }).then((res) => {
      if (!isComponentMounted) {
        return;
      }

      if (!res?.data?.List) {
        return;
      }

      dispatch(userAccountActions.setGroupDG(res?.data?.List[0].GroupID));
      setStreetName(res?.data?.List[0].Name);
      setListStreet(res?.data?.List);
    });
  }, [isReGettingData]);

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListWaitDelivered({ tab: 'DG', group: groupId, code: code })
      .then((res) => {
        if (isReGettingData) {
          dispatch(listOrderActions.setIsReloadGettingDataDG(false));
        }

        if (!isComponentMounted) {
          return;
        }

        if (!res?.data?.List) {
          setIsEmptyListOrder(true);
          setIsGettingData(false);
          return;
        }

        if (isEmpty(res?.data?.List)) {
          setIsEmptyListOrder(true);
          setIsGettingData(false);
          return;
        }

        setIsEmptyListOrder(false);
        setListShop(res?.data?.List);
        setIsGettingData(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isComponentMounted = false;
      });

    return () => {
      isComponentMounted = false;
    };
  }, [groupId, isReGettingData]);

  const renderListWaiting = listShop?.map((item) => {
    return (
      <Box style={styles.listOrderItem} key={item.DonHangID}>
        <Box>
          <Pressable onPress={() => Linking.openURL(`tel:${item.DienThoai}`)}>
            <Text style={styles.listOrderItemTextPhone}>{item.DienThoai}</Text>
          </Pressable>
          <Text>{item.HoTen}</Text>
          <Text>{item.DiaChi}</Text>
        </Box>
        <Box>
          <Button
            onPress={() =>
              navigation.navigate({
                name: SCREENS_NAME.DETAIL_DELIVERD,
                params: {
                  id: item.DonHangID,
                  tab: 'DG',
                },
              })
            }
            style={{
              backgroundColor: colorPalletter.lime['500'],
            }}
          >
            Chi tiết
          </Button>
        </Box>
      </Box>
    );
  });

  return (
    <>
      {isGettingData ? (
        <LoadingComponent />
      ) : (
        <>
          {isEmptyListOrder ? (
            <EmptyListOrder />
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Box style={styles.container}>
                <Pressable onPress={() => onOpen()}>
                  <Box style={styles.addrBtnSection}>
                    <Text style={styles.addrBtnText}>
                      {streetNameFromRedux ?? streetName}
                    </Text>
                    {/* <FontAwesomeIcon icon={faAngleRight} size={14} /> */}
                  </Box>
                </Pressable>

                {renderListWaiting}
              </Box>
            </ScrollView>
          )}
        </>
      )}
      {!listStreets ? null : (
        <ListStreetNameDGBottomSheet data={listStreets} modal={modalRef} />
      )}
    </>
  );
}

export default DeliveredScreen;
