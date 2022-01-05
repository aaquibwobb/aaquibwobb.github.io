import React from "react"; 
import '../../mobileView/myCampaign/MobileViewMyCampaign.css';
const data={
	1:"All(123)",
	2:"Active",
	3:"Draft",
	4:"Under Review",
	5:"Paused",
	6:"Expired",
	7:"Cloused",
	8:"Private"
}

const optiondata=Object.values(data)
function mobileViewMyCampaign() {
  return (
    <div>
      <select className="select">
		  {optiondata.map(e => {
			 return <option value="id">{e}</option>
		  })} 
      </select>
    </div>
  );
}

export default mobileViewMyCampaign;
