import styled, { css } from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  background-color: #116192;
  padding: 10px 0;
  display: flex;
  justify-content: center;

  h1 {
    font: 35px Abel, sans-serif;
    color: #07e2e3;
  }
`;

export const Form = styled.form`
  margin: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
      props.error &&
      css`
        animation: error 250ms linear, fade paused;
        animation-iteration-count: 2;

        @keyframes error {
          0% {
            transform: translateX(0)
          }
          35% {
            transform: translateX(-20px)
          }
          70% {
            transform: translateX(20px)
          }
          100% {
            transform: translateX(0)
          }
        }
      `};
  
  input {
    flex: 1;
    max-width: 800px;
    padding: 15px 35px;
    border: 0;
    border-radius: 30px;
    background: #ebebeb;
    color: #116192;
    border: 2px solid #ebebeb;
    font: 20px Abel, sans-serif;

    &::placeholder {
      color: #116192;
      font: 20px Abel, sans-serif;
    }
    ${(props) =>
      props.error && 
      css`
        border-color: #ff125a;
      `};
  }
`;

export const Error = styled.h1`
  color: #ff125a;
  font-size: 18px;
  flex: 1;
  text-align: center;
  transition: 0.3s;
`

export const Container = styled.div`
  margin-top: 40px;
  padding: 0 30px;
  width: 100%;
  justify-content: center;
  display: flex;

  a {
    flex: 1;
    max-width: 800px;
    justify-content: center;
    display: flex;
    background: #ebebeb;
    flex-direction: row;
    text-decoration: none;
    margin-top: 40px;


    img {
      width: 200px;
      height: auto;

      @media (max-width: 610px) {
        
      visibility: hidden;
      width: 0px;
      height: auto;
    }
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  background: #116192;
  height: 70px;
  display: flex;
  padding: 10px;
  flex: 1;
  
  div {
    height: 70px;
    width: 70px;
    margin: 0 5px;
    padding: 2px;
    display: flex;
    border-radius: 50%;
    background: #116192;
    transform: translateY(20px);


    p {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #07e2e3;
      font: 20px Abel, sans-serif;
      background: #116192;
      border-radius: 50%;
      border: 3px solid #07e2e3;
    }
  }
`;

export const Title = styled.h1`
  font: 35px Abel, sans-serif;
  color: #07e2e3;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 450px;

  @media (max-width: 610px) {
    max-width: 350px;
  }
`;

export const Description = styled.div`
  font: 14px Lato, sans-serif;
  margin: 25px 20px;

  h3 {
    font: 15px Lato, sans-serif;
    font-weight: 400;
    color: #555555;
  }
`;

export const Date = styled.p`
  font: 16px Lato, sans-serif;
  margin: 5px 100px;
  color: #aeaeae;
`;

export const Genre = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  
  @media (max-width: 610px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  p {
    font: 16px Abel, sans-serif;
    font-weight: bold;
    margin-top: 30px;
    margin-right: 15px;
    background: #fff;
    padding: 2px 7px;
    border-radius: 30px;
    border: 1.6px solid #116192;
    color: #116192;
    transition: 0.2s;

    &:hover {
      background: #116192;
      color: #fff;
    }
  }
`;

