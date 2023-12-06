import { Button, Modal } from "components/UI";
import { ConfirmDialogProps } from "./ConfirmDialog.types";
import { BUTTON_VARIANTS } from "../Button/Button.types";
import cn from "classnames";
import styles from "./ConfirmDialog.module.scss";

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  children,
  handleConfirm,
  ...props
}) => {
  return (
    <Modal {...props}>
      <div className={styles.description}>{children}</div>

      <div className={cn(styles.buttons, "displayCenter")}>
        <Button className={styles.button} onClick={handleConfirm}>
          Продолжить
        </Button>
        
        <Button
          className={styles.button}
          variant={BUTTON_VARIANTS.OUTLINED}
          onClick={props.close}
        >
          Отмена
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
