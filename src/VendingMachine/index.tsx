import { useState, useCallback } from "react";
import { Container, CandyContainer, Display, Header, MoneyManipulation, VendingMachineContent, CandyContent, CandyEject } from "./styles";
import { star, oddDelta } from '../AFN';
import React from 'react';
import { ICandy }  from '../Interfaces/ICandy'; 

const VendingMachine: React.FC = () => {

  const [state, setState] = useState(0);
  const [change, setChange] = useState(0);
  const [selectedCandy, setSelectedCandy] = useState<ICandy>();

  let deltaStar = star(oddDelta);

  const handleCandyButton = useCallback(
    (
      s: number, 
      v: number,
      candy?: string,
      candyColor?: string,
      candyPrice?: number,
    ) => {
      setChange(deltaStar(s, v));
      setState(0);
      if (candy && candyColor && candyPrice) {
        const getCandy: ICandy = {
          id: candy,
          color: candyColor,
          price: candyPrice
        }
        setSelectedCandy(getCandy)
      }
  }, [setState, setChange]);

  return (
    <Container>
      <CandyContent>
        <CandyContainer>
            <button style={{backgroundColor: '#ff4040'}} onClick={() => handleCandyButton(state, -6, 'A', '#ff4040', 6)}>
              <img src="" alt="" />
              <p>A</p>
              <span>R$6,00</span>
            </button>
            <button style={{backgroundColor: '#84fa84'}} onClick={() => handleCandyButton(state, -7, 'B', '#84fa84', 7)}>
              <img src="" alt="" />
              <p>B</p>
              <span>R$7,00</span>
            </button>
            <button style={{backgroundColor: '#a6dced'}} onClick={() => handleCandyButton(state, -8, 'C', '#a6dced', 8)}>
              <img src="" alt="" />
              <p>C</p>
              <span>R$8,00</span>
            </button>
          </CandyContainer>
          <CandyEject>
            {change === 0 && "PUSH"}
            {change !== 0 && (
            <button style={{backgroundColor: selectedCandy?.color}} onClick={() => handleCandyButton(state, -8)}>
              <img src="" alt="" />
              <p>{selectedCandy?.id}</p>
              <span>R${selectedCandy?.price},00</span>
            </button>)}
          </CandyEject>
      </CandyContent>
      <VendingMachineContent>
        <Header>
          <img src="" alt="" />
          <h1>Candy</h1>
          <h1>Machine</h1>
        </Header>
        <Display>
          <strong>Total: {state}</strong>
        </Display>
        <MoneyManipulation>
          <button onClick={() => setState(deltaStar(state, 1))}>R$1,00</button>
          <button onClick={() => setState(deltaStar(state, 2))}>R$2,00</button>
          <button onClick={() => setState(deltaStar(state, 5))}>R$5,00</button>
        </MoneyManipulation>
        <Display>
          <strong>Change: {change}</strong>
        </Display>
        <MoneyManipulation>
          {change !== 0 && (
            <button onClick={() => setChange(0)}>R${change},00</button>
          )}
        </MoneyManipulation>
      </VendingMachineContent>

    </Container>
  )
}

export default VendingMachine;