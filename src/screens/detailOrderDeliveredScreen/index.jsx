import React, { useMemo, useState, useEffect } from 'react';
import { Box, Text, Pressable } from 'native-base';
import { createStyles } from './style';
import { ScrollView, Linking } from 'react-native';
import { getDetailOrder } from '@/services';
import { useRoute } from '@react-navigation/core';
import LoadingComponent from '@/components/Loading/index';

//Đã giao
function DetailOrderDeliverdScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const route = useRoute();
  const { tab, id } = route?.params;

  const [isGettingData, setIsGettingData] = useState(false);
  const [shopInfo, setShopInfo] = useState();

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
              <Text style={styles.guestInfoPhoneNumber}>
                {shopInfo?.MaDonHang} {'-'} {shopInfo?.DienThoaiKH}
              </Text>
              <Text style={styles.guestInfoName}>
                {'Người mua:'} <Text>{shopInfo?.TenKH}</Text>
              </Text>
              <Text style={styles.guestInfoAddr}>{shopInfo?.DiaChiKH}</Text>
              <Text style={styles.guestInfoStatus}>
                {'Trạng thái: '}
                <Text style={styles.guestInfoStatusInner}>{'ĐÃ GIAO'}</Text>
              </Text>
            </Box>

            <Box style={styles.priceSection}>
              <Text style={styles.priceText1}>
                {'Thu hộ:'} <Text>{shopInfo?.ThuHo}</Text>
              </Text>
              <Text style={styles.priceShipText}>
                {'Tiền ship: '} <Text>{shopInfo?.TienShip}</Text>
              </Text>
              <Text style={styles.summaryPrice}>
                {'Tổng cộng: '}
                <Text style={styles.summaryPriceNumber}>{shopInfo?.TongCong}</Text>
              </Text>
            </Box>

            <Box style={styles.orderInfoSection}>
              <Text style={styles.orderInfoTextTitle}>
                {shopInfo?.KhoiLuong} {'-'} {shopInfo?.KichThuoc}
              </Text>
              <Text>{'1 tham cho be, 2 khăn mặt, 2 nước xả vải comfort.'}</Text>
              <Text>
                {'Tổng cộng: '}
                <Text>{shopInfo?.TongCong}</Text>
              </Text>
            </Box>

            <Box style={styles.sellerInfoSecction}>
              <Text style={styles.sellerInfoTitleInner}>
                {'Người bán: '}
                <Text>{shopInfo?.TenShop}</Text>
              </Text>
              <Pressable
                onPress={() => Linking.openURL(`tel:${shopInfo?.DienThoaiShop}`)}
              >
                <Text style={styles.sellerPhoneNumberInner}>
                  {shopInfo?.DienThoaiShop}
                </Text>
              </Pressable>
            </Box>
          </ScrollView>
        </Box>
      )}
    </>
  );
}

export default DetailOrderDeliverdScreen;
