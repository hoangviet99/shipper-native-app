import * as SecureStore from 'expo-secure-store';

export async function saveData(keyName, valData, option) {
  try {
    return await SecureStore.setItemAsync(keyName, valData, option);
  } catch (err) {
    return err;
  }
}

export async function getData(keyName, option) {
  try {
    return await SecureStore.getItemAsync(keyName, option);
  } catch (err) {
    return err;
  }
}

export async function removeData(keyName) {
  await SecureStore.deleteItemAsync(keyName);
  return true;
}
