import { httpClient } from "@/helper/index";

export async function getOrderInfoById({ order, code }) {
  const reqParam = {
    order: order,
    code: code,
  };

  try {
    return await httpClient.get("get-order-info.html", reqParam);
  } catch (err) {
    return err;
  }
}
