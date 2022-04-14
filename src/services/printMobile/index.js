import { originalHttpClient } from "@/helper/index";

export async function printMobile({order, code }) {
  const reqParam = {
    order: order,
    code: code,
  };

  try {
    return await originalHttpClient.get("print-mobile.html", reqParam);
  } catch (err) {
    return err;
  }
}
