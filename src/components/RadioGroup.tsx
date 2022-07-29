import * as React from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.form`
  background-color: #7979ff;
  width: 20em;
  padding: 1.2em 1em;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

type RadioItemStyleProps = {
  checked: boolean;
};
const RadioItem = styled.div<RadioItemStyleProps>`
  background-color: ${(props) => (props.checked ? '#2a2a2a' : '#fff')};
  color: ${(props) => (props.checked ? '#fff' : '#2a2a2a')};
  border-radius: 0.5rem;
  width: 100%;
  padding-block: 8px;
  transition: background-color 100ms linear;
`;

const RadioInputLabel = styled.label`
  display: flex;
  cursor: pointer;
  width: 100%;
  margin-left: 10px;
`;

const RadioInput = styled.input`
  display: none;
`;

export default function RadioGroup() {
  const [selected, setSelected] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };
  return (
    <RadioWrapper>
      <RadioItem checked={selected === 'dog'}>
        <RadioInputLabel>
          <RadioInput
            type='radio'
            name='dogorcat'
            value='dog'
            checked={selected === 'dog'}
            onChange={handleChange}
          />
          Dog person
        </RadioInputLabel>
      </RadioItem>
      <RadioItem checked={selected === 'cat'}>
        <RadioInputLabel>
          <RadioInput
            type='radio'
            name='dogorcat'
            value='cat'
            checked={selected === 'cat'}
            onChange={handleChange}
          />
          Cat person
        </RadioInputLabel>
      </RadioItem>
    </RadioWrapper>
  );
}
