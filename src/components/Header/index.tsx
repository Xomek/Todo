import { FC, HTMLAttributes } from "react";
import { stylesFilterAndJoin } from "../../misc/stylesSortAndJoin";
import styles from "./Header.module.scss";

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<IHeaderProps> = ({ className }) => {
  const HeaderStyles = stylesFilterAndJoin([styles.header, className]);

  return <header className={HeaderStyles}></header>;
};

export default Header;
