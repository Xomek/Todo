import { FC, ButtonHTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import styles from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButtonProps> = ({ children, className, ...props }) => {
  const ButtonStyles = stylesFilterAndJoin([styles.button, className]);

  return (
    <button className={ButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
