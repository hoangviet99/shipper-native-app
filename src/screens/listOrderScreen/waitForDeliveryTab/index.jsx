import React, { useMemo, useEffect, useState, useRef } from 'react';
import { Box, Text, Pressable, Button } from 'native-base';
import { ScrollView, Linking } from 'react-native';
import { createStyles } from './style';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';
import { getListWaitDeliveryTab } from '@/services';
import LoadingComponent from '@/components/Loading/index';
import ListStreetNameCGBottomSheet from '@/components/ListStreetNameCG';
import EmptyListOrder from '@/components/EmptyListOrder';
import { useSelector, useDispatch } from 'react-redux';
import { getListStreetNameCG } from '@/services/getListAddress';
import { isEmpty } from 'lodash';
import { userAccountActions } from '@/store/userReducer';
import { listOrderActions } from '@/store/listOrderReducer';

//Cho giao
function WaitForDeliveryScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();
  const [isEmptyListOrder, setIsEmptyListOrder] = useState(false);
  const [listStreets, setListStreet] = useState();
  const [streetName, setStreetName] = useState('');
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const modalRef = useRef(null);
  const onOpen = () => {
    modalRef.current?.open();
  };

  const code = useSelector((state) => state.userAccount.code);
  const groupId = useSelector((state) => state.userAccount.groupCG);
  const streetNameFromRedux = useSelector((state) => state.userAccount.streetNameCG);
  const isReGettingDataCGFromRedux = useSelector(
    (state) => state.listOrder.isReloadGettingDataCG,
  );

  useEffect(() => {
    let isComponentMounted = true;
    getListStreetNameCG({ code: code })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        if (!res?.data?.List) {
          return;
        }

        dispatch(userAccountActions.setGroupCG(res?.data?.List[0].GroupID));
        setStreetName(res?.data?.List[0].Name);
        setListStreet(res?.data?.List);
      })
      .catch((err) => console.log(err));

    return () => {
      isComponentMounted = false;
    };
  }, [isReGettingDataCGFromRedux]);

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getListWaitDeliveryTab({ tab: 'CG', group: groupId, code })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        if (!res?.data?.List) {
          setIsGettingData(false);
          setIsEmptyListOrder(true);
          return;
        }

        if (isEmpty(res?.data?.List)) {
          setIsEmptyListOrder(true);
          setIsGettingData(false);
          return;
        }

        if (isReGettingDataCGFromRedux) {
          dispatch(listOrderActions.setIsReloadGettingDataCG(false));
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
  }, [groupId, isReGettingDataCGFromRedux]);

  const renderListWaiting = listShop?.map((item) => {
    return (
      <Box style={styles.listOrderItem} key={item.DonHangID}>
        <Box>
          <Pressable onPress={() => Linking.openURL(`tel:${item.DienThoai}`)}>
            <Text style={styles.listOrderItemTextPhone}>
              {item.DonHangID} {'-'} {item.DienThoai}
            </Text>
          </Pressable>
          <Text>{item.HoTen}</Text>
          <Text>{item.DiaChi}</Text>
        </Box>
        <Box>
          <Button
            onPress={() =>
              navigation.navigate(SCREENS_NAME.DETAIL_WAITING_DELIVEY, {
                id: item.DonHangID,
                tab: 'CG',
              })
            }
            style={{
              backgroundColor: colorPalletter.lime['500'],
            }}
          >
            Chi tiết
          </Button>
          <Text>{item.TrangThai}</Text>
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
            <>
              <Box style={styles.container}>
                <Pressable onPress={() => onOpen()}>
                  <Box style={styles.addrBtnSection}>
                    <Text style={styles.addrBtnText}>
                      {streetNameFromRedux ?? streetName}
                    </Text>
                    {/* <FontAwesomeIcon icon={faAngleRight} size={14} /> */}
                  </Box>
                </Pressable>

                <ScrollView showsVerticalScrollIndicator>{renderListWaiting}</ScrollView>
              </Box>
              <>
                {!listStreets ? null : (
                  <ListStreetNameCGBottomSheet
                    modal={modalRef}
                    tab={'CG'}
                    data={listStreets}
                  />
                )}
              </>
            </>
          )}
        </>
      )}
    </>
  );
}

export default WaitForDeliveryScreen;
