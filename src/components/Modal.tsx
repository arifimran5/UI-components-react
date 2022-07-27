import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const portalRoot = document.getElementById('modal-root') as HTMLDivElement;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalMain = styled.div`
  background-color: white;
  padding: 2em 2.2em;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.211);
  position: relative;
`;

const ModalHeader = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

type ModalProps = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, close, children }: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    document.body.style.overflow = 'hidden';
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }
  return createPortal(
    <ModalWrapper
      onClick={(e) => {
        close();
        e.stopPropagation();
      }}
    >
      <ModalMain onClick={(e) => e.stopPropagation()} ref={contentRef}>
        <ModalHeader>
          {/* create svg for close button */}
          <span style={{ cursor: 'pointer' }} onClick={() => close()}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 18L18 6M6 6L18 18'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        </ModalHeader>
        {children}
      </ModalMain>
    </ModalWrapper>,
    portalRoot
  );
}
