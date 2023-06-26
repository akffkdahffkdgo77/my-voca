import { create } from 'zustand';

import { createMenuSlice, MenuSlice } from './menuSlice';

export const useBoundStore = create<MenuSlice>()((...a) => ({
    ...createMenuSlice(...a)
}));
