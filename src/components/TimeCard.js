import { useState } from 'react';
import { getTimeObject } from './TimeCalUtil';
function TimeCard({timeInfo, onSubmit,index}){

    const [clockIn, setClockIn] = useState(timeInfo.clockIn.hour + timeInfo.clockIn.min);
    const [clockInTimeFormat, setClockInTimeFormat] = useState(timeInfo.clockIn.timeFormat);

    const [clockOut, setClockOut] = useState(timeInfo.clockOut.hour + timeInfo.clockOut.min);
    const [clockOutTimeFormat, setClockOutTimeFormat] = useState(timeInfo.clockOut.timeFormat);

    function handleSubmit(e) {
        e.preventDefault();
        const clockinObject = getTimeObject(clockIn);
        const clockOutObject = getTimeObject(clockOut);
        setClockIn(`${clockinObject.hour + ":" + clockinObject.min}`);
        setClockOut(`${clockOutObject.hour + ":" + clockOutObject.min}`)
        const updatedTimeCard = {
            clockIn:{
                hour: clockinObject.hour,
                min : clockinObject.min,
                timeFormat: clockInTimeFormat
            },
            clockOut:{
                hour: clockOutObject.hour,
                min:  clockOutObject.min,
                timeFormat: clockOutTimeFormat
            }
        };
        onSubmit(updatedTimeCard,index)
        
    }

    function clockInChange(e){
        const timeString = sanitizeInput(e.target.value);
        if(timeString.length > 4) return;
        setClockIn(timeString)
        
    }

    function clockInTimeFormatChange(e){
        setClockInTimeFormat(e.target.value)
    }
    

    function clockOutChange(e){
        const timeString = sanitizeInput(e.target.value);
        if(timeString.length > 4) return;
        setClockOut(timeString);
    }

    function clockOutTimeFormatChange(e){
        setClockOutTimeFormat(e.target.value);
    }

    function handleFocus(){
        const x = sanitizeInput(clockIn);
        setClockIn(x);
        const y = sanitizeInput(clockOut);
        setClockOut(y);
    }

   
    function sanitizeInput(input){
        let result = input.replace(/\s/g,"");
        result = result.replace(/\D/g,"");
        return result
    }

   

    return (
    
        <div className="col-12" style={{margin:20, padding:50}}>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <div className='col'>
                        <input
                         type="text"
                         inputMode="numeric"
                         className="form-control" 
                         placeholder="Clock in (HHmm)" 
                         aria-label="Clock in"
                         value={clockIn}
                         onChange={clockInChange}
                         onFocus={handleFocus}
                         required
                         />
                    </div>
                    <div  className="col">
                        <select
                         style={{width:"80px"}}
                         value={clockInTimeFormat} 
                         onChange={clockInTimeFormatChange}  
                         className="form-select"
                         >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                    <div className='col'>
                        <input 
                        type="text" 
                        inputMode="numeric"
                        className="form-control" 
                        placeholder="Clock Out (HHmm)" 
                        aria-label="Clock Out"
                        value={clockOut}
                        onChange={clockOutChange}
                        onFocus={handleFocus}
                        required
                        />
                    </div>
                    <div className="col">
                        <select 
                        style={{width:"80px"}} 
                        value={clockOutTimeFormat} 
                        onChange={clockOutTimeFormatChange}
                        className="form-select"
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>

                    <div className="col">
                        <button type="submit" className="btn btn-outline-info">Submit</button>
                    </div>
                </div>
                
            </form>
        </div>
        
    
    );
}

export default TimeCard;