import React from "react";
import { FormWrapper, InputBox, InputField, Label, MainHeading, SubText, Wrapper } from "./login.style";
const Login = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
  return (
    <Wrapper>
      <MainHeading>Sign in</MainHeading>
      <SubText>Sign in using your mobile number.</SubText>
      {!viewOtpForm ? (
        <FormWrapper>
          <form id="loginForm" onSubmit={loginSubmit}>
            <InputField>
              <Label>Phone Number</Label>
              <InputBox
                type="text"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
              /></InputField>
            
            <button className="main-button" type="submit" id="sign-in-button">
              Sign in
            </button>
          </form>
        </FormWrapper>
      ) : (
        <FormWrapper onSubmit={otpSubmit}>
          <form id="otpForm">
            <InputField>
              <label>Enter OTP</label>
              <input
                type="number"
                placeholder="One time password"
                name="otp_value"
                autoComplete="false"
              />
            </InputField>
            <button className="main-button" type="submit">
              Verify OTP
            </button>
          </form>
        </FormWrapper>
      )}
    </Wrapper>
  );
};

export default Login;
