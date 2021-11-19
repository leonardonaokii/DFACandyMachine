import { useState, useCallback, useMemo } from "react";
import { Container, CandyContainer, Display, Header, MoneyManipulation, VendingMachineContent, CandyContent, CandyEject } from "./styles";
import { Alphabet, dfaOdd } from '../DFA';
import React from 'react';
import { ICandy } from '../Interfaces/ICandy';

const VendingMachine: React.FC = () => {
  const [change, setChange] = useState<number>(-1);
  const [selectedCandy, setSelectedCandy] = useState<ICandy>();
  const [word, setWord] = useState<Alphabet[]>([]);

  const total = useMemo<number>(() =>
    word.reduce((acc, curr) => acc + curr, 0)
    , [word]);

  const handleSelectCandy = useCallback(
    (
      symbol: Alphabet,
      candy?: string,
      candyColor?: string,
      candyPrice?: number,
    ) => {
      const newWord = [...word, symbol];
      try {
        dfaOdd(newWord);
        setWord(newWord)
        setChange(total + symbol);

        if (candy && candyColor && candyPrice) {
          const getCandy: ICandy = {
            id: candy,
            color: candyColor,
            price: candyPrice
          }
          setSelectedCandy(getCandy)
        }
      } catch (error) {
        alert('Insufficient money.')
      }
    }, [word, setWord, setSelectedCandy, total]
  );

  const handleAddMoney = useCallback(
    (
      symbol: Alphabet,
    ) => {
      const newWord = [...word, symbol];

      try {
        dfaOdd(newWord);
        setWord(newWord);
      } catch (error) {
        alert(`Don't forget your change and candy.`)
      }
    }, [word, setWord]
  );

  const handleResetMachine = useCallback(() => {
    setChange(-1)
    setWord([])
  }, [setChange, setWord])

  return (
    <Container>
      <CandyContent>
        <CandyContainer>
          <button style={{ backgroundColor: '#ff4040' }} onClick={() => handleSelectCandy(-6, 'A', '#ff4040', 6)}>
            <img src="" alt="" />
            <p>A</p>
            <span>$6,00</span>
          </button>
          <button style={{ backgroundColor: '#84fa84' }} onClick={() => handleSelectCandy(-7, 'B', '#84fa84', 7)}>
            <img src="" alt="" />
            <p>B</p>
            <span>$7,00</span>
          </button>
          <button style={{ backgroundColor: '#a6dced' }} onClick={() => handleSelectCandy(-8, 'C', '#a6dced', 8)}>
            <img src="" alt="" />
            <p>C</p>
            <span>$8,00</span>
          </button>
        </CandyContainer>
        <CandyEject>
          {change === -1 && "PUSH"}
          {change !== -1 && (
            <button style={{ backgroundColor: selectedCandy?.color }} onClick={handleResetMachine}>
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
          <strong>Total: ${change !== -1 ? 0 : total},00</strong>
        </Display>
        <MoneyManipulation>
          <button onClick={() => handleAddMoney(1)}>$1,00</button>
          <button onClick={() => handleAddMoney(2)}>$2,00</button>
          <button onClick={() => handleAddMoney(5)}>$5,00</button>
        </MoneyManipulation>
        <Display>
          <strong>Change: ${change !== -1 ? change : 0},00</strong>
        </Display>
        <MoneyManipulation>
          {change !== -1 && (
            <button onClick={handleResetMachine}>R${change},00</button>
          )}
        </MoneyManipulation>
      </VendingMachineContent>

    </Container>
  )
}

export default VendingMachine;