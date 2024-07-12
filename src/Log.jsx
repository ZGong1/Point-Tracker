const Log = ( {} ) => {
    var logInfo = localStorage.getItem("log")
    logInfo = JSON.parse(logInfo)

    return ( 
        <div>
            {logInfo.map( (item, idx) => <p key={idx}>{item.date}<br/>{item.info}</p>)}
        </div>
    );
}

export default Log