import { FC } from "react";
import { IButton } from "./types";

const Button: FC<IButton> = ({ type = "primary", title }) => {
  return (
    <button className={type === "primary" ? "primary-btn" : "secondary-btn"}>
      {title}
    </button>
  );
};

export default Button;