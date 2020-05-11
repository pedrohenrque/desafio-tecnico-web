import styled from 'styled-components';

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

export const SubNav = styled.div`
  margin-top: 40px;
  padding: 0 30px;
  width: 100%;
  justify-content: center;
  display: flex;
  div {
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #a8a8b3;
      transition: color 0.2s;

      &:hover {
        color: #666;
      }

      svg {
        margin-left: 10px;
      }
    }
    img {
      margin-right: 4px;
      width: 100px;
      height: auto;
    }
  }
`;

export const Container = styled.div`
  margin-top: 15px;
  padding: 0 30px;
  width: 100%;
  justify-content: center;
  display: flex;
  div {
    max-width: 850px;
  }
`;

export const Header = styled.div`
  width: 100%;
  background: #e6e6e6;
  height: 70px;
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const Title = styled.h1`
  font: 35px Abel, sans-serif;
  color: #116192;
  margin: 0 20px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 700px;

  @media (max-width: 610px) {
    max-width: 300px;
  }
`;

export const Date = styled.p`
  font: 16px Lato, sans-serif;
  margin: 0 10px;
  color: #aeaeae;
`;

export const Details = styled.div`
  display: flex;
  background: #f2f2f2;

  img {
    width: 230px;
    height: auto;
    background-size: cover;

    @media (max-width: 610px) {
      visibility: hidden;
      width: 0px;
      height: auto;
    }
  }
`;
export const Description = styled.div`
  font: 14px Lato, sans-serif;
  flex-direction: row;
  padding: 10px 20px 0 30px;

  h1 {
    font: 22px Abel, sans-serif;
    flex: 1;
    color: #116192;
    padding: 0 0 5px 0;
    border-bottom: 1.7px solid #07e2e3;
  }

  h3 {
    font: 14px Lato, sans-serif;
    font-weight: 400;
    margin: 10px 0 30px 0;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 610px) {
  flex-direction: row;
  flex-wrap: wrap;
  }
`;

export const InfoTag = styled.div`
  width: 100%;
  margin: 15px 0 0 0;
  text-align:center;
  flex: 1;

  & + div {
    padding: 0 0 0 15px;
  }

  h2 {
    font: 18px Abel, sans-serif;
    color: #116192;
  }

  p {
    font: 13px Lato, sans-serif;
    font-weight: 400;
  }
`;

export const Tags = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 610px) {
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  }
`;

export const Rate = styled.div`
  margin: 10px 0 50px 0;
  height: 90px;
  width: 90px;
  padding: 3px;
  display: flex;
  border-radius: 50%;
  background: #116192;
  transform: translateY(20px);

  @media (max-width: 610px) {
    height: 50px;
    width: 50px;
  }


  h6 {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #07e2e3;
    font: 28px Abel, sans-serif;
    background: #116192;
    border-radius: 50%;
    border: 5px solid #07e2e3;

    @media (max-width: 610px) {
      border: 2px solid #07e2e3;
      font: 18px Abel, sans-serif;
    }

  }
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
    font: 15px Abel, sans-serif;
    font-weight: bold;
    margin: 30px 15px 15px 0;
    background: #fff;
    height: 30px;
    text-align: center;
    padding: 2px 7px;
    border-radius: 30px;
    border: 1.5px solid #116192;
    color: #116192;
    transition: 0.2s;
    
  }
`;

export const Player = styled.div`
  margin: 20px 0 20px 0;
  flex: 1;
  max-width: 830px;
  height: 480px;
  
  
`
