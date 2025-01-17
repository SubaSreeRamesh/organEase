import React from "react";
// import InputType from "../../components/shared/Form/InputType";
import Form from "../../components/shared/Form/Form.js";
const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="../../../public/assets/images/image2.jpeg" alt="img2" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Login Page"}
            submitbtn={"Login"}
            formType={"login"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
