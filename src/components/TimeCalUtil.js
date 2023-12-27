

function calTimeSheet(timeSheet){
    const validTimeSheet = getValidTimeSheet(timeSheet);
    if(validTimeSheet.length === 0) return {hour: 0, min:0};


    let updatedTotalTime = {hour: 0, min:0};

    validTimeSheet.forEach((timecard) => {
        const clockIn = getRawTime(timecard.clockIn);
        const clockOut = getRawTime(timecard.clockOut);

        let hour = (clockOut.hour - clockIn.hour); 
        //if your shift ends on the next day.
        if(hour < 0) hour += 24;


        let min = (clockOut.min - clockIn.min); 

        if(min < 0){
           min += 60; 
           hour -= 1 
        }


        updatedTotalTime.hour += hour;
        updatedTotalTime.min += min;
        if(updatedTotalTime.min >= 60){
           updatedTotalTime.hour += 1;
           updatedTotalTime.min -= 60;
        }

        

    });

    return updatedTotalTime;
}


function getValidTimeSheet(timeSheet){
    return timeSheet.filter((timecard) => (
        (timecard.clockIn.hour !== "" && timecard.clockIn.min !== "" && timecard.clockIn.timeFormat)
        &&
        (timecard.clockOut.hour !== "" && timecard.clockOut.min !== "" && timecard.clockOut.timeFormat)));
}

function getRawTime(time){
    let hour = Number(time.hour);
    let min = Number(time.min);

    if(time.timeFormat === "PM" && time.hour !== "12"){
        hour += 12;
    }else if(time.timeFormat === "AM" && time.hour === "12"){
        hour += 12;
    }

    return {hour: hour, min: min};

}


export function getTimeObject(timeString){
    let hour = "";
    let min = "";
    if(timeString.length === 3){
        hour = timeString.substring(0,1);
        min = timeString.substring(1);
    }else{
        hour = timeString.substring(0,2);
        min = timeString.substring(2);
    }

    return {hour:hour, min:min};
}



export default calTimeSheet;