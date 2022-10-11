// import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      console.log(_key);
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      console.log(_key);
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      console.log(_key);
      return Promise.resolve();
    },
  };
};

const createLocalStorage = () => {
  return {
    getItem(_key: string) {
      const value = localStorage.getItem(_key);
      return Promise.resolve(value);
    },
    setItem(_key: string, value: string) {
      localStorage.setItem(_key, value);
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      localStorage.removeItem(_key);
      // localStorage.setItem(_key, undefined);
      return Promise.resolve();
    },
  };
};
//createWebStorage('local')
const storage =
  typeof window !== "undefined" ? createLocalStorage() : createNoopStorage();

export default storage;
