import "intl";
import "intl/locale-data/jsonp/en";

export const getCurrencyString = (value) => {
  let vndFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });

  let resultStr = vndFormatter.format(value).toString();
  resultStr = resultStr.slice(1);

  return resultStr;
};
