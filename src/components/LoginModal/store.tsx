import { proxy, useSnapshot } from 'valtio';

const store = proxy({
  open: false,
});

export const useLoginModalStore = () => useSnapshot(store);
export const getLoginModalStore = () => store;
