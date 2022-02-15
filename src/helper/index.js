import api from 'apisauce';
import { BASE_URL } from '@/config';

export const HTTP_KEY_HEADER = {
  AUTHORIZATION: 'authorization',
  CONTENT_TYPE: 'Content-Type',
  ORIGIN: 'Origin',
};

export const HTTP_HEADER_VALUE = {
  APPLICATION_JSON: 'application/x-www-form-urlencoded',
};

export const httpClient = api.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    [HTTP_KEY_HEADER.CONTENT_TYPE]: HTTP_HEADER_VALUE.APPLICATION_JSON,
  },
});
