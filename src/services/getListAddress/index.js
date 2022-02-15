import { httpClient } from '@/helper/index';

export async function getListStreetNameCL({ code }) {
  const reqParam = {
    tab: 'CL',
    code: code,
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListStreetNameCG({ code }) {
  const reqParam = {
    tab: 'CG',
    code: code,
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListStreetNameDG({ code }) {
  const reqParam = {
    tab: 'DG',
    code: code,
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}

export async function getListStreetNameTL({ code }) {
  const reqParam = {
    tab: 'TL',
    code: code,
  };

  try {
    return await httpClient.get('group.html', reqParam);
  } catch (err) {
    return err;
  }
}
