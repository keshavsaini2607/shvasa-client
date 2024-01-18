import React, { useState } from "react";
import { HomeTabs } from "../utils/Constants";
import SupportAgents from "../components/ui/SupportAgents";
import SupportTickets from "../components/ui/SupportTickets";

const Home = () => {
   const [activeTab, setActiveTab] = useState<
      "supportAgents" | "supportTickets"
   >("supportAgents");
   return (
      <div className="w-full h-full flex">
         <aside className="flex flex-col gap-3 w-[25%] bg-gray-50 h-full p-2">
            {HomeTabs.map((tab) => (
               <span
                  key={tab.id}
                  className={`p-4 rounded cursor-pointer ${
                     activeTab === tab.key ? "bg-blue-200 text-blue-600" : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
               >
                  {tab.title}
               </span>
            ))}
         </aside>
         <main className="p-4 w-[75%]">
            {activeTab === "supportAgents" ? (
               <SupportAgents />
            ) : (
               <SupportTickets />
            )}
         </main>
      </div>
   );
};

export default Home;
