import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 32px auto;
  width: 600px;
  min-height: 800px;

  border-radius: 20px;
  border: solid 2px #131313;
  background: #ffff80;
`

export const CandyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  height: 800px;

  border-right: 2px #131313 solid;
`

export const CandyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  margin: 40px 0px;
  width: 80%;
  height: 60%;
  
  border-radius: 20px;
  background: #282828 ;
  -webkit-box-shadow: 0 0 2px 2px #131313;
  -moz-box-shadow: 0 0 2px 2px #131313;
  box-shadow: 0 0 2px 2px #131313;


  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100px;
    width: 100px;
    padding: 40px 24px;
    margin: 12px 0px;

    font-size: 20px;

    background: #ff781f;
    border-radius: 50%;
    border: solid 2px #131313;
    cursor: pointer;

    p {
      margin: 0px;
      padding: 0px;
    }

    span {
      margin: 0px;
      padding: 0px;

      font-size: 16px;
    }
  }
`

export const CandyEject = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 120px;
  width: 80%;
  color: #4040ff;
  
  background: #282828 ;
  border: none;

  font-family: Roboto;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 4px;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100px;
    width: 100px;
    padding: 40px 24px;
    margin: 12px 0px;

    font-size: 20px;

    background: #ff781f;
    border-radius: 50%;
    border: solid 2px #131313;
    cursor: pointer;

    p {
      margin: 0px;
      padding: 0px;
    }

    span {
      margin: 0px;
      padding: 0px;

      font-size: 16px;
    }
  }
`

export const VendingMachineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 40%;
  height: 800px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid 1px #131313;
  margin: 40px 20px 12px;
  border-radius: 10%;
  width: 80%;

  background: #fffdc6;

  h1 {
    margin: 0px;
    padding: 0px 16px;
    
    color: #4040ff;
    
    font-size: 28px;
    font-family: Bungee Shade;
  }
`

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 48px;
  width: 64%;
  border-radius: 8px;
  border: solid 1px #131313;
  padding: 4px 12px;

  background: #fffdc6;

  strong {
    padding: 0px;
    margin: 0px;
    color: #4040ff;
    font-size: 20px;
    font-weight: 600px;
    font-family: Roboto;
  }
`

export const MoneyManipulation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px;
    width: 80%;
    border-radius: 20px;
    margin-bottom: 12px;
    min-height: 60px;
    
    background: #3A3A3A;
    -webkit-box-shadow: 0 0 2px 2px #131313;
    -moz-box-shadow: 0 0 2px 2px #131313;
    box-shadow: 0 0 2px 2px #131313;

    button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      height: 48px;
      padding: 16px 32px;
      margin: 4px 0px;
      max-width: 112px;
      
      border-radius: 5px;
      border: solid 2px #131313;
      background: #98fb98;

      font-size: 16px;
      cursor: pointer;
    }
`