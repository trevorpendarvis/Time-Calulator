import TimeSheet from "./components/TimeSheet";
import TotalView from "./components/TotalView";
import calTimeSheet from "./components/TimeCalUtil";
import { useState } from 'react';
function App(){

    
    const [totalTime, setTotalTime] = useState({hour:0,min:0});   

    function handleChange(updatedTimecard){
        let x = calTimeSheet(updatedTimecard)
        console.log(x);
        setTotalTime(x);
    }


    return (
        <div className="container">
            <div className="row">
                <TimeSheet handleChange={handleChange}/>
                <TotalView rawTime={totalTime}/>
            </div>
        </div>
    
    );
}

export default App;