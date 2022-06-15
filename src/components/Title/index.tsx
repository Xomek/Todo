import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import styles from "./Title.module.scss";

const Title: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const TitleStyles = stylesFilterAndJoin([styles.title, className]);

  return (
    <div className={TitleStyles} {...props}>
      {children}
    </div>
  );
};

export default Title;
