import React from 'react'
import "./taboptions.css";

const tabs=[
  {
      id : 1,
      name:"Restaurant",

  },
  {
    id : 2,
    name:"Cooking",
    
}

];
const Taboptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => (
          <div key={tab.id} onClick={() => setActiveTab(tab.name)}>
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
  
  export default Taboptions;
