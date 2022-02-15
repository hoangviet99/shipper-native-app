import React, { useState, useEffect } from "react";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { SCREENS_NAME } from "@/constants/screen";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getOrderInfoById } from "@/services/getOrderInfoById";
import { useSelector, useDispatch } from "react-redux";
import { orderInfoActions } from "@/store/orderInfoReducer/index";

const BarcodeScanTab = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const code = useSelector((state) => state.userAccount.code);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (type == "1") { // If type is CODE_128
      getOrderInfoById({ order: data, code: code }).then((res) => {
        if (res.ok) {
          navigation.navigate({
            name: SCREENS_NAME.DETAIL_ORDER_INFO,
            params: {
              orderInfo: res.data,
            }
          })
          dispatch(orderInfoActions.setResponseData(res.data));
        }
      });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.code128]}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
    </View>
  );
};

export default BarcodeScanTab;
