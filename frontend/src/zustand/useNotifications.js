import {create} from 'zustand';

const useNotifications = create((set) => ({
	allNotifications: [],
	setAllNotifications: (allNotifications) => set({ allNotifications }),
	loading: false,
	setLoading: (loading) => set({ loading }),
}));
export default useNotifications;
