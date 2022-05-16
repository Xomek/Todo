import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import styles from "./TrashCan.module.scss";

interface ITodosProps extends HTMLAttributes<HTMLDivElement> {}

const TrashCan: FC<ITodosProps> = ({ className }) => {
  const TrashCanStyles = stylesFilterAndJoin([
    "page",
    styles.trashcan,
    className,
  ]);

  return <div className={TrashCanStyles}></div>;
};

export default TrashCan;
