import React, { useMemo, useState, useEffect } from 'react';
import { Box, Text, Checkbox, Pressable, useToast } from 'native-base';
import { createStyles } from './style';
import { ScrollView, Linking } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import LoadingComponent from '@/components/Loading/index';
import { getDetailOrder } from '@/services';
import { SCREENS_NAME } from '@/constants/screen';
import { changeStatus } from '@/services/changeStatus';
import { useSelector, useDispatch } from 'react-redux';
import { listOrderActions } from '@/store/listOrderReducer';

//Trả lại
function DetailOrderWaitingScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const toast = useToast();
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { tab, id } = route?.params;
  const codeFromRedux = useSelector((state) => state.userAccount.code);

  const [isGettingData, setIsGettingData] = useState(false);
  const [listShop, setListShop] = useState();
  const [shopInfo, setShopInfo] = useState();
  const [orderID, setOrderID] = useState();

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

  const handleChangeStatus = (id, status) => {
    changeStatus({ id: id, status: status, code: codeFromRedux })
      .then((res) => {
        if (res?.data?.result === 'Error') {
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
          dispatch(listOrderActions.setIsReloadGettingDataCG(true));
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <ScrollView>
            <Box style={styles.sellerInfoSection}>
              <Pressable onPress={() => Linking.openURL(`tel:${shopInfo?.DienThoai}`)} >
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
                <Text style={styles.orderStatusTitleBold}>{'ĐÃ TRẢ'}</Text>
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
}

export default DetailOrderWaitingScreen;
