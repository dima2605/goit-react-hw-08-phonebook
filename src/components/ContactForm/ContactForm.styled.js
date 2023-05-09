import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ContainerForm = styled.div`
  width: 320px;
  padding: 15px;
  outline: 1px solid black;
`;

export const ContactForm = styled(Form)`
  margin-left: 33vw;
  display: flex;
  flex-direction: column;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled(Field)`
  width: 200px;
  margin-top: 5px;
  border: 1px solid purple;
  background-color: white;
  &:focus {
    border-color: blue;
    background-color: white;
  }
`;

export const Button = styled.button`
  width: fit-content;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid purple;
  color: white;
  background: purple;
`;
