import React, { useMemo, useEffect, useState } from "react";
import { Box, Text, Pressable, useToast } from "native-base";
import { createStyles } from "./style";
import { ScrollView, Linking } from "react-native";
import { addOrderInfo } from "@/services/addOrderInfo";
import { useRoute, useNavigation } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { listOrderActions } from "@/store/listOrderReducer";

// chi tiết đơn hàng
function DetailOrderInfoScreen() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const toast = useToast();
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isDisableAddInButton, setIsDisableAddInButton] = useState(false);

  const { orderInfo } = route?.params;

  const userCode = useSelector((state) => state.userAccount.code);

  const handleAddInClick = (orderCode) => {
    addOrderInfo({ order: orderCode, code: userCode })
      .then((res) => {
        toast.show({
          baseStyle: {
            display: "flex",
            flexWrap: "wrap",
            fontSize: 11,
          },
          title: res.ok ? "Thêm thành công" : "Thêm thất bại",
          status: res.ok ? "success" : "error",
          placement: "top",
          isClosable: true,
        });

        setIsDisableAddInButton(true);

        setTimeout(() => {
          navigation.goBack();
          dispatch(listOrderActions.setIsReloadGettingDataCG(true));
        }, 2000);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Box style={styles.container}>
        <ScrollView>
          <Box style={styles.guestInfoSection}>
            <Pressable
              onPress={() => Linking.openURL(`tel:${orderInfo?.DienThoaiKH}`)}
            >
              <Text style={styles.guestInfoPhoneNumber}>
                {orderInfo?.Ma} {"-"} {orderInfo?.DienThoaiKH}
              </Text>
            </Pressable>

            <Text style={styles.guestInfoName}>
              {"Người mua:"} <Text>{orderInfo?.TenKH}</Text>
            </Text>
            <Text style={styles.guestInfoAddr}>{orderInfo?.DiaChiKH}</Text>
            <Text style={styles.guestInfoStatus}>
              {"Trạng thái: "}
              <Text style={styles.guestInfoStatusInner}>{"CHỜ GIAO"}</Text>
            </Text>
          </Box>

          <Box style={styles.priceSection}>
            <Text style={styles.priceText1}>
              {"Thu hộ:"}{" "}
              <Text>
                {orderInfo?.ThuHo} {" đ"}
              </Text>
            </Text>
            <Text style={styles.priceShipText}>
              {"Tiền ship: "}{" "}
              <Text>
                {orderInfo?.TienShip} {" đ"}
              </Text>
            </Text>
            <Text style={styles.summaryPrice}>
              {"Tổng cộng: "}
              <Text style={styles.summaryPriceNumber}>
                {orderInfo?.TongCong} {" đ"}
              </Text>
            </Text>
          </Box>

          <Box style={styles.orderInfoSection}>
            <Text style={styles.orderInfoTextTitle}>
              {orderInfo?.KhoiLuong} {"-"} {orderInfo?.KichThuoc}
            </Text>
            <Text>{"1 tham cho be, 2 khăn mặt, 2 nước xả vải comfort."}</Text>
            <Text>
              {"Tổng cộng: "}
              <Text>{"375.000 đ"}</Text>
            </Text>
          </Box>

          <Box style={styles.sellerInfoSecction}>
            <Text style={styles.sellerInfoTitleInner}>
              {"Người bán: "}
              <Text>{orderInfo?.TenShop}</Text>
            </Text>
            <Text style={styles.sellerPhoneNumberInner}>
              {orderInfo?.DienThoaiShop}
            </Text>
          </Box>
        </ScrollView>

        <Box style={styles.btnGroupBottom}>
          <Box style={styles.btnGroupInner}>
            <Pressable
              style={styles.btnInner1}
              onPress={() => handleAddInClick(orderInfo?.Ma)}
              disabled={isDisableAddInButton}
            >
              <Box style={styles.btnTextTitle}>
                <Text style={styles.btnTextTitleInner}>{"THÊM VÀO"}</Text>
              </Box>
            </Pressable>
            <Pressable
              style={styles.btnInner2}
              onPress={() => console.log("Do nothing!")}
            >
              <Box style={styles.btnTextTitle}>
                <Text style={styles.btnTextTitleInner}>{""}</Text>
              </Box>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DetailOrderInfoScreen;
