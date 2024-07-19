const logAction = text => {

    var toEdit = JSON.parse( localStorage.getItem("log") )
    if (!toEdit) toEdit = []
    const now = new Date();
    const dateTimeString = now.toString();

    const newObj = {
        "date": dateTimeString,
        "info": text
    }
    toEdit.push(newObj)

    localStorage.setItem("log", JSON.stringify(toEdit) )

}

export default logAction