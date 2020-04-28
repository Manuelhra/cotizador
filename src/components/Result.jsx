import React from 'react'

import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
  background: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const TextContainer = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid #26C6DA;
  background: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Text = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ cotizacion }) => {

  return (
    cotizacion === 0
    ? <Message>Elige marca, año y tipo de seguro</Message>
    : (
      <TransitionGroup
      component="span"
      className="resultado"

      >
        <CSSTransition
        classNames="resultado"
        key={cotizacion}
        timeout={{enter: 500, exit: 500}}
        >
          <TextContainer>
            <Text>El total es: $ <span>{cotizacion}</span></Text>
          </TextContainer> 
        </CSSTransition>
      </TransitionGroup>
    )
  )
}
 
export default Result;