import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../saga/actionCreators";
import "./FormStyle.js";
import * as S from "./FormStyle";

function LoginForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
    password: "",
    remember: false,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "remember") {
      setFormValues({ ...formValues, [name]: checked });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues)
    dispatch(loginRequest(formValues));
    setFormValues({
      email: "",
      username: "",
      password: "",
      remember: false,
    });
    // try {
    //   const response = await axios.post(
    //     "http://127.0.0.1:8080/api/login",
    //     formValues
    //   );
    //   if (response.status === 200) {
    //     alert(response.data.message);
    //   }
    //   setFormValues({
    //     email: "",
    //     username: "",
    //     password: "",
    //     remember: false,
    //   });
    //   console.log("res", response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="username"
            placeholder="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <S.Input
            type="text"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          />

          <S.Lable>
            <S.Input
              type="checkbox"
              name="remember"
              placeholder="remember"
              checked={formValues.remember}
              onChange={handleChange}
            />
            &nbsp; Remember Me
          </S.Lable>

          <S.Button>LogIN</S.Button>
        </S.Form>
      </S.Wrapper>
    </>
    // <div className="container">
    //   <form onSubmit={handleSubmit} data-testid="form">
    //     <h1>User Login Form</h1>
    //     <div className="ui divider"></div>
    //     <div className="ui form">
    //       <div className="field">
    //         <label>
    //           Email
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email"
    //             value={formValues.email}
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </div>
    //       <div className="field">
    //         <label>
    //           username
    //           <input
    //             type="text"
    //             name="username"
    //             placeholder="username"
    //             value={formValues.username}
    //             onChange={(e) => handleChange(e)}
    //           />
    //         </label>
    //       </div>
    //       <div className="field">
    //         <label>
    //           Password
    //           <input
    //             type="text"
    //             name="password"
    //             placeholder="password"
    //             value={formValues.password}
    //             onChange={handleChange}
    //           />
    //         </label>
    //       </div>
    //       <div className="field">
    //         <label>Remember This user ?</label>
    //         <input
    //           type="checkbox"
    //           name="remember"
    //           placeholder="remember"
    //           checked={formValues.remember}
    //           onChange={handleChange}
    //         />
    //       </div>

    //       <button className="fluid ui button blue" type="submit" value="Submit">
    //         LogIn
    //       </button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default LoginForm;
