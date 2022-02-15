import React, { useMemo, useEffect, useState } from 'react';
import { Box, Text, Pressable, useToast } from 'native-base';
import { createStyles } from './style';
import { ScrollView, Linking } from 'react-native';
import { getDetailOrder } from '@/services';
import { useRoute, useNavigation } from '@react-navigation/core';
import LoadingComponent from '@/components/Loading/index';
import { changeStatus } from '@/services/changeStatus';
import { useSelector, useDispatch } from 'react-redux';
import { SCREENS_NAME } from '@/constants/screen';
import { listOrderActions } from '@/store/listOrderReducer';

//chờ giao
function DetailOrderWaitingDeliveryScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const toast = useToast();
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { id, tab } = route?.params;

  const [isGettingData, setIsGettingData] = useState(false);
  const [shopInfo, setShopInfo] = useState();
  const codeFromRedux = useSelector((state) => state.userAccount.code);

  const handleChangeStatus = (id, status) => {
    changeStatus({ id: id, status: status, code: codeFromRedux })
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
          navigation.replace(SCREENS_NAME.HOME_NAVIGATOR);
          dispatch(listOrderActions.setIsReloadGettingDataDG(true));
          dispatch(listOrderActions.setIsReloadGettingDataTL(true));
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

        const response = res?.data;

        setShopInfo(response);
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

  return (
    <>
      {isGettingData ? (
        <LoadingComponent />
      ) : (
        <Box style={styles.container}>
          <ScrollView>
            <Box style={styles.guestInfoSection}>
              <Pressable onPress={() => Linking.openURL(`tel:${shopInfo?.DienThoaiKH}`)}>
                <Text style={styles.guestInfoPhoneNumber}>
                  {shopInfo?.Ma} {'-'} {shopInfo?.DienThoaiKH}
                </Text>
              </Pressable>

              <Text style={styles.guestInfoName}>
                {'Người mua:'} <Text>{shopInfo?.TenKH}</Text>
              </Text>
              <Text style={styles.guestInfoAddr}>{shopInfo?.DiaChiKH}</Text>
              <Text style={styles.guestInfoStatus}>
                {'Trạng thái: '}
                <Text style={styles.guestInfoStatusInner}>{'CHỜ GIAO'}</Text>
              </Text>
            </Box>

            <Box style={styles.priceSection}>
              <Text style={styles.priceText1}>
                {'Thu hộ:'}{' '}
                <Text>
                  {shopInfo?.ThuHo} {' đ'}
                </Text>
              </Text>
              <Text style={styles.priceShipText}>
                {'Tiền ship: '}{' '}
                <Text>
                  {shopInfo?.TienShip} {' đ'}
                </Text>
              </Text>
              <Text style={styles.summaryPrice}>
                {'Tổng cộng: '}
                <Text style={styles.summaryPriceNumber}>
                  {shopInfo?.TongCong} {' đ'}
                </Text>
              </Text>
            </Box>

            <Box style={styles.orderInfoSection}>
              <Text style={styles.orderInfoTextTitle}>
                {shopInfo?.KhoiLuong} {'-'} {shopInfo?.KichThuoc}
              </Text>
              <Text>{'1 tham cho be, 2 khăn mặt, 2 nước xả vải comfort.'}</Text>
              <Text>
                {'Tổng cộng: '}
                <Text>{'375.000 đ'}</Text>
              </Text>
            </Box>

            <Box style={styles.sellerInfoSecction}>
              <Text style={styles.sellerInfoTitleInner}>
                {'Người bán: '}
                <Text>{shopInfo?.TenShop}</Text>
              </Text>
              <Text style={styles.sellerPhoneNumberInner}>{shopInfo?.DienThoaiShop}</Text>
            </Box>
          </ScrollView>

          <Box style={styles.btnGroupBottom}>
            <Box style={styles.btnGroupButtonTitle}>
              <Text style={styles.btnGroupButtonTitleInner}>
                {'Chuyển trạng thái đơn hàng này sang'}
              </Text>
            </Box>
            <Box style={styles.btnGroupInner}>
              <Pressable
                style={styles.btnInner1}
                onPress={() => handleChangeStatus(shopInfo?.DonHangID, 'DG')}
              >
                <Box style={styles.btnTextTitle}>
                  <Text style={styles.btnTextTitleInner}>{'Đã giao'}</Text>
                </Box>
              </Pressable>
              <Pressable
                style={styles.btnInner2}
                onPress={() => handleChangeStatus(shopInfo?.DonHangID, 'DGCT')}
              >
                <Box style={styles.btnTextTitle}>
                  <Text style={styles.btnTextTitleInner}>{'Đã giao 1 phần'}</Text>
                </Box>
              </Pressable>
              <Pressable
                style={styles.btnInner3}
                onPress={() => handleChangeStatus(shopInfo?.DonHangID, 'CT')}
              >
                <Box style={styles.btnTextTitle}>
                  <Text style={styles.btnTextTitleInner}>{'Chờ trả'}</Text>
                </Box>
              </Pressable>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default DetailOrderWaitingDeliveryScreen;
