import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 4%;

  .special {
    display: flex;
    flex-direction: column;
    background-color: rgba(99, 99, 99);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    padding: 2px;
    margin: 4px;
  }
`;

export const ButtonFilter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  padding: 2px;
  margin: 4px;
  cursor: pointer;
`;
