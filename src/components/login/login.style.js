import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";

const Wrapper = Styled.div` {
  maxWidth: '580px',
  width: '100%',
  height: '100vh'
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 1rem;
  margin: 0 auto;
}`;
const MainHeading = Styled.div`
  color: #212121;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;
const SubText = Styled.p`
  color: #424242;
  font-size: 15px;
`;

const FormWrapper = Styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
`;

const InputField = Styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 0rem;
`;
const Label = Styled.label`
  color: rgb(133, 133, 133);
  font-size: 14px;
`;
const InputBox = Styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 13px;
  outline: none;
  background: #ffff;
  border: 2px solid #ccc;
  margin-top: 0.5rem;
  color: #000;
  font-family: inherit;
  && focus{
      border: 2px solid #2193b0;
  }
`;
// const FormWrapperButton=styled.button,
// .main-button {
//   background: linear-gradient(to right, #2193b0, #6dd5ed);
//   color: #fff;
//   width: 100%;
//   padding: 0.75rem;
//   font-weight: 600;
//   font-family: inherit;
//   margin-top: 0.75rem;
//   outline: none;
//   border: none;
//   border-radius: 13px;
//   cursor: pointer;
//   transition: all 0.3s ease;
// }
// .form-wrapper button:hover {
//   opacity: 0.9;
// }

// .bottom-message {
//   width: 100%;
//   text-align: center;
//   color: #ccc;
//   margin-top: 2rem;
// }
// .bottom-message h5 {
//   font-weight: 400;
// }
// .bottom-message h5 a {
//   color: #fff;
//   font-weight: 600;
//   text-decoration: none;
// }

export {
  Wrapper,
  MainHeading,
  InputBox,
  Label,
  InputField,
  FormWrapper,
  SubText,
};
