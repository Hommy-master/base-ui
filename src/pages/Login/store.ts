import { proxy, useSnapshot } from 'valtio';

const store = proxy({
  isLogin: false,
});

export const useLoginStore = () => useSnapshot(store);
export const getLoginStore = () => store;
