import { FC, InputHTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import styles from "./MyInput.module.scss";

export type InputType = "taskInput" | "mainInput";

interface IMyInput extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: InputType;
}

const MyInput: FC<IMyInput> = ({
  children,
  className,
  inputType = "mainInput",
  ...props
}) => {
  const InputStyles = stylesFilterAndJoin([
    styles.input,
    className,
    styles[inputType],
  ]);

  return <input className={InputStyles} {...props} />;
};

export default MyInput;
