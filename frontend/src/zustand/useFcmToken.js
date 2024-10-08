import {create} from 'zustand'

const useFcmToken = create((set) => ({
    fcmToken: null,
    setFcmToken: (fcmToken) => set({ fcmToken }),
}));
export default useFcmToken;