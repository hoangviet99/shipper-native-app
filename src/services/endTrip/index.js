import { httpClient } from "@/helper/index";

export async function endTrip({ moneyStr, code }) {
  const reqParam = {
    money: moneyStr,
    code: code,
  };

  try {
    return await httpClient.get("end-trip.html", reqParam);
  } catch (err) {
    return err;
  }
}
