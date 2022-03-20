import React, { useMemo, useState, useEffect } from "react";
import { Box, Text } from "native-base";
import { createStyles } from "./style";
import { Pressable } from "react-native";
import { getCurrencyString } from "@/helper/formater";
import { result } from "lodash";

const Banknote = ({
  curencyValue = 9999,
  amount = 0,
  btnDecsHandle = () => null,
  btnIncsHandle = () => null,
}) => {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  return (
    <Box style={styles.container}>
      <Text style={styles.txtBanknote}>{getCurrencyString(curencyValue)} VNĐ</Text>
      <Pressable style={styles.btnDecrease} onPress={() => btnDecsHandle()}>
        <Text style={styles.btnText}>{"—"}</Text>
      </Pressable>
      <Text style={styles.txtAmount}>{amount}</Text>
      <Pressable style={styles.btnIncrease} onPress={() => btnIncsHandle()}>
        <Text style={styles.btnText}>{"+"}</Text>
      </Pressable>
    </Box>
  );
};

export default Banknote;
