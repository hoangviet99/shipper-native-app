import { getData, saveData } from '@/helper/secureStore';
import { ACCESS_TOKEN_KEY } from '@/config';

export async function saveTokenToStore(accessToken, keyName) {
  if (!isString(accessToken) || accessToken == '') {
    return false;
  }

  await saveData(keyName, accessToken);
  return true;
}

export async function getTokenFromStore(keyName = ACCESS_TOKEN_KEY) {
  try {
    return await getData(keyName);
  } catch (err) {
    return err;
  }
}

export async function removeTokenFromStore(keyName = ACCESS_TOKEN_KEY) {
  try {
    return await removeData(keyName);
  } catch (err) {
    return err;
  }
}
