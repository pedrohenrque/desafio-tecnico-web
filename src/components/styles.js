import styled from 'styled-components';

export const Nav = styled.nav`
  flex: 1;
  width: 100%;
  margin: 50px 0 50px 0 ;
`

export const Button = styled.button`
  margin-right: 10px;
  border: none;
  height: 70px;
  width: 70px;
  background-color: #fff;
  font: 22px Abel, sans-serif;
  color: #116192;
  flex: 1;

  &:focus{
    div {
    height: 70px;
    width: 70px;
    margin: 0 5px;
    padding: 2px;
    display: flex;
    border-radius: 50%;
    background: #116192;

      p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #07e2e3;
        font-size: 30px;
        background: #116192;
        border-radius: 50%;
        border: 3px solid #07e2e3;
      }
    }
  }

`