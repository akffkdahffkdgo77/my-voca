import { create } from 'zustand';

import { createMenuSlice, MenuSlice } from 'lib/zustand/menuSlice';

export const useBoundStore = create<MenuSlice>()((...a) => ({
    ...createMenuSlice(...a)
}));
