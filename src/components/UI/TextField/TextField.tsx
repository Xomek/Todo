import { TEXT_FIELD_VARIANTS, TextFieldProps } from "./TextField.types";
import cn from "classnames";
import styles from "./TextField.module.scss";

const TextField: React.FC<TextFieldProps> = ({
  className,
  variant = TEXT_FIELD_VARIANTS.OUTLINED,
  ...props
}) => {
  return (
    <input
      className={cn(styles.textField, className, {
        [styles[variant]]: variant,
      })}
      type="text"
      {...props}
    />
  );
};

export default TextField;
