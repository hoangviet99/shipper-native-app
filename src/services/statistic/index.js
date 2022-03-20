import { httpClient } from "@/helper/index";

export async function statisticQuickInfo({ code }) {
  const reqParam = {
    code: code,
  };

  try {
    return await httpClient.get("quick-info.html", reqParam);
  } catch (err) {
    return err;
  }
}

export async function statisticSuccessInfo({ dateStr, code }) {
  const reqParam = {
    date: dateStr,
    code: code,
  };

  try {
    return await httpClient.get("success-info.html", reqParam);
  } catch (err) {
    return err;
  }
}

export async function statisticTripInfo({ dateStr, code }) {
  const reqParam = {
    date: dateStr,
    code: code,
  };

  try {
    return await httpClient.get("trip-info.html", reqParam);
  } catch (err) {
    return err;
  }
}
