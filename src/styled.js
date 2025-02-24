import styled from "styled-components";

export const StyledBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px repeat(8, 50px) 30px;
  grid-template-rows: 30px repeat(8, 50px) 30px;
  gap: 2px;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledCell = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.highlight ? "#90EE90" : props.isDark ? "#769656" : "#EEEED2"};
  font-size: 40px;
  font-weight: bold;
`;

export const StyledLabel = styled.div`
  width: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
`;

export const StyledTopLabel = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
`;
