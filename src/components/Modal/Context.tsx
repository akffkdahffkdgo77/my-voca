import { createContext } from 'react';

import type { ModalContextType } from 'components/Modal/types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
