import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
}

export enum BUTTON_VARIANTS {
  CONTAINED = "contained",
  OUTLINED = "outlined",
}
