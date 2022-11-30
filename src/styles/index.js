import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 895px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 25px;

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: #da2535;
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 58px;
  background: #ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #da2535;
  letter-spacing: 1px;

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
    font-style: italic;
    line-height: 24px;
    color: rgba(218, 37, 53, 0.7);
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.alin || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 112px;
  height: 58px;
  border: none;
  background: #da2535;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fbfbfb;
  transition: all 0.5s linear;

  &:hover {
    transform: scale(1.04);
  }
`;

export const Item = styled.li`
  padding: 8px 10px 8px 24px;
  width: 354px;
  min-height: 50px;
  background-color: ${(props) => (props.checked ? "#da2535" : "#ffff")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  P {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration: ${(props) => (props.checked ? "line-through" : "")};
    color: ${(props) => (props.checked ? "#fbfbfb" : "#000000")};
    text-transform: uppercase;

    width: 75%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;

  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    
  }

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#fbfbfb" : "#000000")};
    transition: all 0.5s linear;
    font-weight: 100;

    &:hover {
      opacity: 0.5;
    }
  }
`;
