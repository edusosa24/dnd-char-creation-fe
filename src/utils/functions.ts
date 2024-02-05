export const getStorage = () => {
  const userData = window.localStorage.getItem('dndUserLoginData');
  if (userData) {
    const data = JSON.parse(userData);
    return data;
  }
  return null;
};

export const clearStorage = () => {
  window.localStorage.removeItem('dndUserLoginData');
};

export const saveStorage = (data: any) => {
  window.localStorage.setItem('dndUserLoginData', JSON.stringify(data));
};
