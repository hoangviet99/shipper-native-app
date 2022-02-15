import React, { useMemo, useEffect, useState } from 'react';
import { Box, Text, ScrollView, Pressable, Checkbox, useToast } from 'native-base';
import { createStyles } from './style';
import { getDetailOrder } from '@/services';
import { useRoute, useNavigation } from '@react-navigation/core';
import LoadingComponent from '@/components/Loading/index';
import { changeStatus } from '@/services/changeStatus';
import { SCREENS_NAME } from '@/constants/screen';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderActions } from '@/store/listOrderReducer';
import { CommonActions } from '@react-navigation/native';
import { Linking } from 'react-native';

//Chờ lấy
const DetailWaitingForItScreen = () => {
  const [orderID, setOrderID] = useState();
  const styles = useMemo(() => {
    return createStyles();
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();
  const route = useRoute();
  const { id, tab } = route?.params;

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();
  const [shopInfo, setShopInfo] = useState();

  const code = useSelector((state) => state.userAccount.code);

  const handleChangeStatus = (id, status) => {
    changeStatus({ id: id, status: status, code: code })
      .then((res) => {
        if (res?.data?.msg === 'Error') {
          toast.show({
            title: 'Đã có lỗi xảy ra !',
            status: 'error',
            placement: 'top',
            isClosable: true,
          });
          return;
        }

        toast.show({
          baseStyle: {
            display: 'flex',
            flexWrap: 'wrap',
            fontSize: 11,
          },
          title: 'Cập nhật thành công !',
          status: 'success',
          placement: 'top',
          isClosable: true,
        });

        setTimeout(() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: SCREENS_NAME.HOME_NAVIGATOR,
            }),
          );
          dispatch(listOrderActions.setIsReloadGettingDataCG(true));
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsGettingData(true);
    let isComponentMounted = true;

    getDetailOrder({ id: id, tab: tab })
      .then((res) => {
        if (!isComponentMounted) {
          return;
        }

        setListShop(res?.data?.List);
        setShopInfo(res?.data);
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
  }, [id, tab]);

  const renderListOrder = listShop?.map((item, idx) => {
    return (
      <Box key={idx} style={styles.orderItem}>
        <Box style={styles.orderItemTitleBox}>
          <Checkbox
            accessibilityLabel="This is a dummy checkbox"
            colorScheme="green"
            size="sm"
            onPress={() => {
              if (orderID) {
                setOrderID(orderID + '-' + item.DonHangID);
                return;
              }

              setOrderID(item.DonHangID);
            }}
          />
          <Text style={styles.orderItemTitle}>
            <Text style={styles.orderTitleBold}>{item.Ma} </Text>
            {'-'} {item.TenKH}
          </Text>
        </Box>
        <Text style={styles.orderItemAddress}>{item.DiaChiKH}</Text>
      </Box>
    );
  });

  return (
    <>
      {isGettingData ? (
        <LoadingComponent />
      ) : (
        <Box style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box style={styles.sellerInfoSection}>
              <Pressable onPress={() => Linking.openURL(`tel:${shopInfo?.DienThoai}`)}>
                <Text style={styles.sellerInfoPhoneTxt}>{shopInfo?.DienThoai}</Text>
              </Pressable>
              <Text style={styles.sellerInfoTitle}>
                {'Người bán:'}
                <Text style={styles.sellerInfoName}>{shopInfo?.TenShop}</Text>
              </Text>
              <Text style={styles.sellerInfoTitle}>
                {'Địa chỉ: '}
                <Text style={styles.sellerInfoAddress}>{shopInfo?.DiaChi}</Text>
              </Text>
            </Box>

            {renderListOrder}

            <Box style={styles.orderStatusSection}>
              <Text style={styles.orderStatusTitle}>
                {'Trạng thái: '}{' '}
                <Text style={styles.orderStatusTitleBold}>{'CHỜ LẤY'}</Text>
              </Text>
            </Box>
          </ScrollView>

          <Box style={styles.btnGroupBottom}>
            <Box style={styles.btnGroupButtonTitle}>
              <Text style={styles.btnGroupButtonTitleInner}>
                {'Chuyển trạng thái đơn hàng này sang'}
              </Text>
            </Box>
            <Box style={styles.btnGroupInner}>
              <Pressable style={styles.btnInner1}>
                <Box style={styles.btnTextTitle}>
                  <Text style={styles.btnTextTitleInner}>{''}</Text>
                </Box>
              </Pressable>
              <Pressable
                style={styles.btnInner2}
                onPress={() => handleChangeStatus(orderID, 'CG')}
              >
                <Box style={styles.btnTextTitle}>
                  <Text style={styles.btnTextTitleInner}>{'Chờ giao'}</Text>
                </Box>
              </Pressable>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailWaitingForItScreen;
