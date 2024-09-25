import { create } from 'zustand'

export const useUserStore = create((set) => ({
    user: undefined,
    setUser: (user) => {


        set((state) => ({
            ...state,
            user: user,
        }));
    },
}));
