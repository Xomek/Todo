import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import styles from "./Title.module.scss";

interface ITitleProps extends HTMLAttributes<HTMLDivElement> {}

const Title: FC<ITitleProps> = ({ children, className, ...props }) => {
  const TitleStyles = stylesFilterAndJoin([styles.title, className]);

  return (
    <div className={TitleStyles} {...props}>
      {children}
    </div>
  );
};

export default Title;
