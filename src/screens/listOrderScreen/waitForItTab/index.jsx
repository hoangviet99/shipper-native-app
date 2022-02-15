import React, { useMemo, useEffect, useState, useRef } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';
import { getListWaiForItTab } from '@/services';
import LoadingComponent from '@/components/Loading/index';
import ListStreetNameBottomSheet from '@/components/ListStreetNameCL';
import EmptyListOrder from '@/components/EmptyListOrder';
import { useSelector, useDispatch } from 'react-redux';
import { getListStreetNameCL } from '@/services/getListAddress';
import { userAccountActions } from '@/store/userReducer';
import { isEmpty } from 'lodash';
import { listOrderActions } from '@/store/listOrderReducer';

function WaitForItTab() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();
  const [isEmptyListOrder, setIsEmptyListOrder] = useState(false);
  const [listStreets, setListStreet] = useState();
  const [streetName, setStreetName] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const code = useSelector((state) => state.userAccount.code);
  const groupId = useSelector((state) => state.userAccount.groupCL);
  const streetNameFromRedux = useSelector((state) => state.userAccount.streetNameCL);
  const isReGettingDataCLFromRedux = useSelector(
    (state) => state.listOrder.isReloadGettingDataCL,
  );

  const modalRef = useRef(null);
  const onOpen = () => {
    modalRef.current?.open();
  };

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListStreetNameCL({ code: code })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        if (!res?.data?.List) {
          return;
        }

        dispatch(userAccountActions.setGroupCL(res?.data?.List[0].GroupID));
        setStreetName(res?.data?.List[0].Name);
        setListStreet(res?.data?.List);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isComponentMounted = false;
    };
  }, []);

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListWaiForItTab({ tab: 'CL', group: groupId, code: code })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        if (!res?.data?.List) {
          setIsGettingData(false);
          return;
        }

        if (isEmpty(res?.data?.List)) {
          setIsEmptyListOrder(true);
          setIsGettingData(false);
          return;
        }

        if (isReGettingDataCLFromRedux) {
          dispatch(listOrderActions.setIsReloadGettingDataCL(false));
        }

        setIsEmptyListOrder(false);
        setIsGettingData(false);
        setListShop(res.data?.List);
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
  }, [groupId, isReGettingDataCLFromRedux]);

  const renderListWaiting = listShop?.map((item, idx) => {
    return (
      <Box style={styles.listOrderItem} key={idx}>
        <Box>
          <Pressable onPress={() => Linking.openURL(`tel:${item.DienThoai}`)}>
            <Text style={styles.listOrderItemTextPhone}>{item.DienThoai}</Text>
          </Pressable>
          <Text>{item.TenShop}</Text>
          <Text>{item.DiaChi}</Text>
        </Box>
        <Box>
          <Button
            onPress={() =>
              navigation.navigate({
                name: SCREENS_NAME.DETAIL_WAITING_FOR_IT,
                params: {
                  tab: 'CL',
                  id: item.ShopID,
                },
              })
            }
            style={{
              backgroundColor: colorPalletter.lime['500'],
              marginBottom: 10,
            }}
          >
            Chi tiết
          </Button>
          <Text>{item.TrangThai}</Text>
        </Box>
        {!listStreets ? null : (
          <ListStreetNameBottomSheet modal={modalRef} tab={'CL'} data={listStreets} />
        )}
      </Box>
    );
  });

  return (
    <>
      {isGettingData ? (
        <LoadingComponent />
      ) : (
        <>
          {isEmptyListOrder || !listShop ? (
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
    </>
  );
}

export default WaitForItTab;
