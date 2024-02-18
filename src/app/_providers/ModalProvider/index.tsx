'use client'
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { zIndices } from '../../cssVariables';

interface Props {
  children: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
  return (
    <ModalProvider zIndex={zIndices.modal}>
      {children}
      <ModalContainer />
    </ModalProvider>
  );
};
