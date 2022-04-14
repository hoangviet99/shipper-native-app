import * as Print from "expo-print";

const print = async (htmlString) => {
  const html = htmlString
  await Print.printAsync({
    html,
  });
};

export default function PrintOrderInfomation(htmlString = "<html></html>") {
  print(htmlString);
}
