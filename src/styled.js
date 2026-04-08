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

export const PieceSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

export const PieceOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const PieceButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: 2px solid ${(props) => (props.$isSelected ? "#333" : "#ccc")};
  background: ${(props) => (props.$isSelected ? "#f0d9b5" : "#fff")};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 16px;
  transition: border 0.2s ease, transform 0.1s ease, background 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  .piece-icon {
    font-size: 34px;
    line-height: 1;
  }
  .piece-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const AutoGenerateWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`;