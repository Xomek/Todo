export interface ModalProps {
  title?: string;
  close: () => void;
  children: React.ReactNode;
}
