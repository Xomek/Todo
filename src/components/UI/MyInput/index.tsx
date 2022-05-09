import { FC, InputHTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import styles from "./MyInput.module.scss";

interface IMyInput extends InputHTMLAttributes<HTMLInputElement> {}

const MyInput: FC<IMyInput> = ({ children, className, ...props }) => {
  const InputStyles = stylesFilterAndJoin([styles.input, className]);

  return <input className={InputStyles} {...props} />;
};

export default MyInput;
