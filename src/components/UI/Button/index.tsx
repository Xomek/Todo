import { FC, ButtonHTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import styles from "./Button.module.scss";

export type ButtonTypes = "addBtn" | "deleteBtn";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonTypes;
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  buttonType = "addBtn",
  ...props
}) => {
  const ButtonStyles = stylesFilterAndJoin([
    styles.button,
    styles[buttonType],
    className,
  ]);

  return (
    <button className={ButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
