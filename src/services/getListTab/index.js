import { httpClient } from '@/helper/index';

export async function getListWaiForItTab({ tab, group, code }) {
  const reqParam = {
    tab: tab,
    group: group,
    code: code,
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListWaitDeliveryTab({ tab, group, code }) {
  const reqParam = {
    tab: tab,
    group: group,
    code: code,
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListWaitDelivered({ tab, group, code }) {
  const reqParam = {
    tab: tab,
    group: group,
    code: code,
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListReturnTab({ tab, group, code }) {
  const reqParam = {
    tab: tab,
    group: group,
    code: code,
  };

  try {
    return await httpClient.get('tab-list.html', reqParam);
  } catch (err) {
    return err;
  }
}
