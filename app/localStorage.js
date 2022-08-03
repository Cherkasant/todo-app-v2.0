export const LOCAL_STORAGE_KEY = 'todos'; //creating a todos key in LocalStorage

//getting data entry in localStorage
export function getNameFromStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

//entry data into localStorage
export function setNameFromLocalStorage(key, todos) {
  localStorage.setItem(key, JSON.stringify(todos));
}
