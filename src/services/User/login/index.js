import { httpClient } from '@/helper/index';

export async function login({ userName, password }) {
  const reqParam = {
    Username: userName,
    Password: password,
  };

  let formBody = [];
  for (var property in reqParam) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(reqParam[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  return httpClient.post('shipper-sign-in.html', formBody);
}
