import { TEXT_FIELD_VARIANTS, TextFieldProps } from "./TextField.types";
import cn from "classnames";
import styles from "./TextField.module.scss";
import { forwardRef } from "react";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, variant = TEXT_FIELD_VARIANTS.OUTLINED, error, ...props },
    ref
  ) => {
    return (
      <input
        className={cn(styles.textField, className, {
          [styles[variant]]: variant,
          [styles.error]: error,
        })}
        type="text"
        ref={ref}
        {...props}
      />
    );
  }
);

export default TextField;
