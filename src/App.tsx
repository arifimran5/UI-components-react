import { useState } from 'react';
import Modal from './components/Modal';
import styled from 'styled-components';
import Accordian from './components/Accordian';
import RadioGroup from './components/RadioGroup';

const ModalOpenButton = styled.button`
  background-color: #2a2a2a;
  color: white;
  font-size: 1.1rem;
  font-family: inherit;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding-inline: 15px;
  padding-block: 10px;

  &:hover {
    transition: background 0.2s ease-in;
    background-color: #727272;
  }
`;

const ModalCloseButton = styled.button`
  background-color: #7979ff;
  color: white;
  font-size: 1.1rem;
  font-family: inherit;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding-inline: 15px;
  padding-block: 10px;

  &:hover {
    transition: background 0.2s ease-in;
    background-color: #6a6adc;
  }
`;
function App() {
  const [isOpen, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <h1>Modal</h1>
      <ModalOpenButton onClick={() => setOpen(true)}>Modal</ModalOpenButton>
      <Modal isOpen={isOpen} close={closeModal}>
        <h1>Modal Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
          quibusdam.
        </p>
        <ModalCloseButton onClick={() => setOpen(false)}>
          Okay Got it!
        </ModalCloseButton>
      </Modal>

      <br />
      <br />
      <br />
      <h1>Accordian</h1>
      <Accordian />

      <br />
      <br />
      <br />

      <h1>Radio Group</h1>
      <RadioGroup />
    </div>
  );
}

export default App;
