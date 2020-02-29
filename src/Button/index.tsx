import React from "react";
import "./index.css";
interface IButtonProps {
  buttonText: string;
  primary?: boolean;
  danger?: boolean;
}

const Button: React.FC<IButtonProps> = props => {
  const { buttonText, primary, danger } = props;
  let styles;
  primary ? (styles = "primary") : danger ? (styles = "danger") : (styles = "");
  return (
    <>
      <button className={"button" + " " + styles}>{buttonText}</button>
    </>
  );
};

export default Button;
export { Button };
