import styled from 'styled-components';

// const lightBlue = '#5555FF';

const FormOuterDiv = styled.div`
  width: 100%;
`;

const FormHeading = styled.div`
  margin: 5px;
`;

const XOut = styled.span`
  float: right;
  font-size: 1em;
  cursor: pointer;
  width: 20px;
  height: auto;
  text-align: center;
  &:hover {
    background-color: blue;
    color: white;
}  `;

const ButtonDiv = styled.div`
  margin: 1em 0 0 0;
`;

const CloseButton = styled.button`
  border-radius: 5px;
  background-color: #6c757d;
  color: white;
  margin: 5px 5px 5px 0;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  background-color: blue;
  color: white;
  margin: 5px 5px 5px 0;
`;

const InputLabel = styled.label`
  margin 5px 0 3px;
  width: 90%;
`;

const FormInput = styled.input`
  width: 90%;
`;

export {
  FormOuterDiv,
  FormHeading,
  XOut,
  ButtonDiv,
  CloseButton,
  SubmitButton,
  InputLabel,
  FormInput
};
