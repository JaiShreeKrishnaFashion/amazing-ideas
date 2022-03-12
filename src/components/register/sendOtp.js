import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const SendOtp = () => {
  // const { name, setValue } = useState(e.target);

  const handleChange = () => {};
  return (
    <form>
      <div className="otpContainer"></div>
      <input
        type="number"
        name="mobile"
        placeholder="mobile number"
        required
        onChange={(e) => handleChange(e)}
      />
      <Button className="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SendOtp;
