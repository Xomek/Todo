import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../../misc/stylesSortAndJoin";
import styles from "./Form.module.scss";

interface IFormProps extends HTMLAttributes<HTMLFormElement> {}

const Form: FC<IFormProps> = ({ children, className, ...props }) => {
  const FormStyles = stylesFilterAndJoin([styles.form, className]);

  return (
    <form className={FormStyles} {...props}>
      {children}
    </form>
  );
};

export default Form;
