import React, { useMemo, useState, useEffect } from "react";
import { createStyles } from "./style";
import { ScrollView, View, Text, Pressable } from "react-native";
import Banknote from "@/components/Banknote/index";
import { getCurrencyString } from "@/helper/formater";

function GiveMoneyBackTab() {
  const styles = useMemo(() => {
    return createStyles();
  }, []);

  const [data, setData] = useState(() => [
    { curencyValue: 500000, amount: 0 },
    { curencyValue: 200000, amount: 0 },
    { curencyValue: 100000, amount: 0 },
    { curencyValue: 50000, amount: 0 },
    { curencyValue: 20000, amount: 0 },
    { curencyValue: 10000, amount: 0 },
    { curencyValue: 5000, amount: 0 },
    { curencyValue: 2000, amount: 0 },
    { curencyValue: 1000, amount: 0 },
  ]);

  const [totalMoney, setTotalMoney] = useState(() => 0);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const btnPressHandle = (type, index) => {
    let newData = [];
    switch (type) {
      case "decrease":
        newData = data;
        if (newData[index].amount > 0) newData[index].amount -= 1;
        setData(newData);
        setTotalMoney(calTotalMoney());
        forceUpdate();
        break;
      case "increase":
        newData = data;
        newData[index].amount += 1;
        setData(newData);
        setTotalMoney(calTotalMoney());
        forceUpdate();
        break;
      default:
        alert(". . .");
        break;
    }
  };

  const calTotalMoney = () => {
    let total = 0;
    data.forEach((item) => {
      if (item.amount > 0) {
        total += item.amount * item.curencyValue;
      }
    });
    return total;
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {data.map((item, index) => {
          return (
            <Banknote
              key={index}
              curencyValue={item.curencyValue}
              amount={item.amount}
              btnDecsHandle={() => btnPressHandle("decrease", index)}
              btnIncsHandle={() => btnPressHandle("increase", index)}
            ></Banknote>
          );
        })}
      </ScrollView>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>{getCurrencyString(totalMoney)}đ</Text>
        <Pressable
          disabled={totalMoney === 0}
          onPress={() => alert(totalMoney)}
        >
          <Text
            style={
              totalMoney === 0
                ? styles.submitButtonDisable
                : styles.submitButton
            }
          >
            {"Nộp tiền"}
          </Text>
        </Pressable>
      </View>
    </>
  );
}

export default GiveMoneyBackTab;
