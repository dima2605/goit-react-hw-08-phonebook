import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-left: 33vw;
  font-size: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 5px;
  border: 1px solid purple;
  &:focus {
    border-color: blue;
    background-color: white;
  }
`;
