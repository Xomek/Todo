import { ModalProps } from "./Modal.types";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const Modal: React.FC<ModalProps> = ({ title, close, children }) => {
  const handleWrapperClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    close();
  };

  return createPortal(
    <div className={styles.wrapper} onClick={handleWrapperClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
