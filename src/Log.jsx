import "./log.css"

const Log = ( {} ) => {
    var logInfo = localStorage.getItem("log")
    logInfo = JSON.parse(logInfo)

    return ( 
        <div>
            {/* gross log info reversal */}
            {(logInfo.map( (item, idx) => logInfo[logInfo.length - 1 - idx]))
                     .map( (item, idx) => <p className="logItem gray" key={idx}><strong>{item.date}:</strong><br/>{item.info}</p>)}
        </div>
    );
}

export default Log