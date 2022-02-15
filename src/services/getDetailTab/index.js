import { httpClient } from '@/helper/index';

export async function getDetailOrder({ tab, id, code }) {
  const reqParam = {
    tab: tab,
    id: id,
    code: code,
  };

  try {
    return await httpClient.get('tab-detail.html', reqParam);
  } catch (err) {
    return err;
  }
}
