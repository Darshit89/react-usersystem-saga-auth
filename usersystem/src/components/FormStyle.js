import styled, { keyframes, createGlobalStyle } from "styled-components";

export const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #FDF9F3;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #213c6c;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;

  align-item: spece-between;
  position: relative;
  border-radius: 10px;
  height: 350px;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 15px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 1.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Lable = styled.label`
  font-weight: 700;
  padding: 0 3px;
`;
// .container {
//     display: flex !important;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     max-width:  100vw;
//     width: 100vw;
//     margin: auto;
//     background: rgb(2, 0, 36);
//     background: radial-gradient(
//       circle,
//       rgba(2, 0, 36, 1) 0%,
//       rgba(30, 54, 59, 1) 0%,
//       rgba(93, 93, 116, 1) 100%
//     );
//     position: relative;

//   }
//   .container > form {
//     width: 28%;
//     border: 1px solid #dfdfdf;
//     padding: 20px;
//     border-radius: 5px;
//     background: #fff;
//     position: absolute;
//     top:50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }

//   button {
//     background: #0563b4 !important;
//   }
//   p {
//     color: red;
//   }
