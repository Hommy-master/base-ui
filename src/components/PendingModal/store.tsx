import { proxy, useSnapshot } from 'valtio';

const store = proxy({
	open: false,
  modalText: '',
});

export const usePendingModalStore = () => useSnapshot(store);
export const getPendingModalStore = () => store;
