import { httpClient } from "@/helper/index";

export async function addOrderInfo({ order, code }) {
  const reqParam = {
    order: order,
    code: code,
  };

  try {
    return await httpClient.get("add-order.html", reqParam);
  } catch (err) {
    return err;
  }
}
