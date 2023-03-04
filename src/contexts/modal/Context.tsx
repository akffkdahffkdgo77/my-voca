import { createContext } from 'react';

import type { ModalContextType } from 'contexts/modal/types';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default ModalContext;
