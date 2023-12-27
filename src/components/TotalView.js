function TotalView({rawTime}){
    let percent = "0";
    const fullWorkWeek = 40.00;
    if(rawTime.hour !== 0 || rawTime.min !== 0){
        const empWorkWeek = (rawTime.hour + (rawTime.min / 60));
        percent = ((empWorkWeek/fullWorkWeek)*100).toFixed().toString();
    }

    
    
    percent += "%"



    return (

        <div className="col-12">
            <div>
                <h1
                    style={{marginLeft:250, marginTop:30}}
                >
                    Total Time Logged {rawTime.hour} Hours {rawTime.min} Minutes 
                </h1>
            </div>
            <div className="progress" role="progressbar" aria-label="Animated striped example"  aria-valuemin="0" aria-valuemax="40" style={{height:"50px"}}>
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated text-bg-warning" 
                    style={{width:percent}}
                 >
                   {percent}
                 </div>
            </div>
    </div>
    );
}

export default TotalView;