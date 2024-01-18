import React from "react";
import { Modal } from "antd";

interface ModalInterface {
   open: boolean;
   handleClose: () => void;
   children: React.ReactNode;
}

const BaseModal: React.FC<ModalInterface> = ({
   handleClose,
   open,
   children,
}) => {
   return (
      <Modal open={open} onOk={handleClose} onCancel={handleClose} footer={null}>
         {children}
      </Modal>
   );
};

export default BaseModal;
