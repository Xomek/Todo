import { FC, ButtonHTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import styles from "./Button.module.scss";

export type ButtonType = "addBtn" | "udpateBtn" | "deleteBtn";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  onClick: () => void;
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  onClick,
  buttonType = "addBtn",
  ...props
}) => {
  const ButtonStyles = stylesFilterAndJoin([
    styles.button,
    styles[buttonType],
    className,
  ]);

  return (
    <button
      className={ButtonStyles}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
