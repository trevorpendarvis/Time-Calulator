import TimeCard from "./TimeCard";
import { useState } from 'react';
function TimeSheet({handleChange}) {

    const[timeCardList, setTimeCardList] = useState([{clockIn: {hour:"", min:"",timeFormat:"AM"}, clockOut: {hour:"", min:"",timeFormat:"AM"}}]);
    const[clearAll,setClearAll] = useState(false);

    function timeCardSubmit(timeCard, index){
       const updatedTimeCard = [
            ...timeCardList,
       ];

       if(index === (timeCardList.length -1)){
        updatedTimeCard[timeCardList.length] = {clockIn: {hour:"", min:"",timeFormat:"AM"}, clockOut: {hour:"", min:"",timeFormat:"AM"}};
       }

       updatedTimeCard[index].clockIn.hour = timeCard.clockIn.hour;
       updatedTimeCard[index].clockIn.min = timeCard.clockIn.min;
       updatedTimeCard[index].clockIn.timeFormat = timeCard.clockIn.timeFormat;

       updatedTimeCard[index].clockOut.hour = timeCard.clockOut.hour;
       updatedTimeCard[index].clockOut.min = timeCard.clockOut.min;
       updatedTimeCard[index].clockOut.timeFormat = timeCard.clockOut.timeFormat;

       setTimeCardList(updatedTimeCard);

       handleChange(updatedTimeCard);

    }


    function handleClearAll(){
        window.location.reload();
    }


    const renderTimeSheet = timeCardList.map((timecard, index) =>{
        return(<TimeCard key={index} timeInfo={timecard} onSubmit={timeCardSubmit} index={index} flag={clearAll} setFlag={setClearAll}/>);
    });

  return (

        <div>
            <button
             className="btn btn-outline-danger" 
             style={{marginLeft:'32%', marginTop:'2%'}}
             onClick={handleClearAll}
             >
                Clear All
            </button>
            {renderTimeSheet}
        </div>
  );
}

export default TimeSheet;
