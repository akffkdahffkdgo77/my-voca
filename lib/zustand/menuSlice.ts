import { StateCreator } from 'zustand';

export interface MenuSlice {
    isOpen: boolean;
    setIsOpen: () => void;
}

export const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
    isOpen: false,
    setIsOpen: () =>
        set((state) => ({
            isOpen: !state.isOpen
        }))
});
