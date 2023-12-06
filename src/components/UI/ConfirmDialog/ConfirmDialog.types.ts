import { ModalProps } from "../Modal/Modal.types";

export interface ConfirmDialogProps extends ModalProps {
  handleConfirm: () => void;
}
