import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useEffect, useState } from "react";
import AddSupportAgentModal from "./modal/AddSupportAgentModal";
import BaseModal from "./modal";
import { getAllSupportAgents } from "../../api/supportAgent";
import { AgGridReact } from "ag-grid-react";
import { SupportAgentResponseInterface } from "../../utils/interface/supportAgentResponse.interface";

const SupportAgents: React.FC = () => {
   const [showAddModal, setShowAddModal] = useState(false);
   const [rowData, setRowData] = useState<SupportAgentResponseInterface[] | []>(
      []
   );

   const getSupportAgents = async () => {
      const agents = await getAllSupportAgents();
      if (!agents?.error) {
         setRowData(agents?.data);
      }
   };
   useEffect(() => {
      getSupportAgents();
   }, []);

   const handleCloseModal = () => {
      setShowAddModal(false);
      getSupportAgents();
      console.log({ rowData });
   };

   const [colDefs, setColDefs] = useState<any[]>([
      { field: "name" },
      { field: "email" },
      { field: "phone" },
      { field: "description" },
      { field: "tasks assigned" },
      { field: "dateCreated" },
   ]);


   return (
      <div>
         <div className="w-full border-b-[1px] pb-2 flex items-center justify-between">
            <h1 className="text-2xl text-gray-700 ">
               Create/Manage Support Agents
            </h1>
            <button
               className="bg-blue-500 text-white p-2 rounded"
               onClick={() => setShowAddModal(true)}
            >
               Add New Agent
            </button>
         </div>
         <div id="content" className="py-4 h-[500px] ">
            <div className="ag-theme-quartz h-full">
               <AgGridReact rowData={rowData} columnDefs={colDefs} />
            </div>
         </div>
         <AddSupportAgentModal
            open={showAddModal}
            handleClose={handleCloseModal}
         />
      </div>
   );
};

export default SupportAgents;
