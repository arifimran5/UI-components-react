import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useToggle from '../hooks/useToggle';

const AccordianMain = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 20em;
  border: 1px solid #ccc;
  background-color: #7979ff;
  border-radius: 0.5rem;
  padding: 1.5em 2em;
`;

export default function Accordian() {
  return (
    <AccordianMain>
      <AccordianItem title='Accordian Item 1'>
        This is text inside accordian 1
      </AccordianItem>
      <AccordianItem title='Accordian Item 2'>
        This is text inside accordian 2
      </AccordianItem>
    </AccordianMain>
  );
}

const AccordianItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #2a2a2a;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 5px;
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translateY(0px);
    transform: translateY(-10px);
    transition: transfom 100ms ease-in ;
  }
  
  to{
    opacity: 1;
    -webkit-transform: none;
    transform:none;
    transition: transfom 100ms ease-in ;
  }
`;

type AccordianItemContentProps = { value: boolean };
const AccordianItemContent = styled.div<AccordianItemContentProps>`
  &[data-state='open'] {
    overflow: hidden;
    padding: 10px 10px;
    animation: ${slideDown} 100ms ease-in;
  }
`;

const AccordianItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const { value, toggle } = useToggle(false);
  return (
    <>
      <AccordianItemHeader onClick={toggle}>
        {title}
        <span style={{ fontSize: '1.3rem' }}>{value ? '-' : '+'}</span>
      </AccordianItemHeader>
      <AccordianItemContent
        value={value}
        data-state={value ? 'open' : 'closed'}
      >
        {value && children}
      </AccordianItemContent>
    </>
  );
};
