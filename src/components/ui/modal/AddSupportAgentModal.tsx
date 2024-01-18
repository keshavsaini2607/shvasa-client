import React from "react";
import { FormInputInterface } from "../../../utils/interface/formInput.interface";
import DynamicForm from "../../Form";
import { FormInterface } from "../../../utils/interface/form.interface";
import { SupportAgentRequestInterface } from "../../../utils/interface/supportAgentRequest.interface";
import { saveSupportAgent } from "../../../api/supportAgent";
import { Modal } from "antd";

interface AddSupportAgentModalInterface {
   open: boolean;
   handleClose: () => void;
}

const AddSupportAgentModal: React.FC<AddSupportAgentModalInterface> = ({
   open,
   handleClose,
}) => {
   const supportAgentFormInputs: FormInputInterface[] = [
      {
         name: "name",
         placeholder: "Full name of the support agent...",
         type: "text",
         required: true,
         label: "Name",
      },
      {
         name: "email",
         placeholder: "Full email of the support agent...",
         type: "text",
         required: true,
         label: "Email",
      },
      {
         name: "phone",
         placeholder: "Full phone of the support agent...",
         type: "text",
         required: true,
         label: "Phone",
      },
      {
         name: "description",
         placeholder: "Full description of the support agent...",
         type: "text",
         required: true,
         label: "Description",
      },
      {
         name: "active",
         placeholder: "Full active of the support agent...",
         type: "text",
         required: true,
         label: "active",
      },
   ];

   const onSubmit = async (data: SupportAgentRequestInterface) => {
      console.log(data);
      data.active = Boolean(data.active);
      data.dateCreated = new Date();
      const response = await saveSupportAgent(data);
      if (response) {
         handleClose();
      }
   };

   const formParams: FormInterface = {
      formName: "SupportAgentForm",
      inputs: supportAgentFormInputs,
      onSubmit,
      submitBtnName: "Save Support Agent",
   };

   return (
      <Modal
         open={open}
         onOk={handleClose}
         onCancel={handleClose}
         footer={null}
      >
         <div className="p-4">
            <div>
               <DynamicForm {...formParams} />
            </div>
         </div>
      </Modal>
   );
};

export default AddSupportAgentModal;
