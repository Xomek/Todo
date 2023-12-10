import { InputHTMLAttributes } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: TEXT_FIELD_VARIANTS;
  error?: boolean;
}

export enum TEXT_FIELD_VARIANTS {
  CONTAINED = "contained",
  OUTLINED = "outlined",
}
