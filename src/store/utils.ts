export const setDataToLocalStorage = (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value));

export const getDataFromLocalStorage = (key: string) =>
    JSON.parse(localStorage.getItem(key) || "null");
