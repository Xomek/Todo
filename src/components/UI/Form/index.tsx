import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Form.module.scss";

interface IFormProps extends HTMLAttributes<HTMLFormElement> {}

const Form: FC<IFormProps> = ({ children, className, ...props }) => {
  const FormStyles = cn([styles.form, className]);

  return (
    <form className={FormStyles} {...props}>
      {children}
    </form>
  );
};

export default Form;
