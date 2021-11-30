import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.varient === "danger" ? "#dc143c" : "#4caf50"};
  font-size: 14px;
  width: 150px;
  height: 48px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

export default Button;
