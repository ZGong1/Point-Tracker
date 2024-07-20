function getCurrentDate() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    
    return `${month}/${day}/${year}`;
  }

const logAction = text => {

    var toEdit = JSON.parse( localStorage.getItem("log") )
    if (!toEdit) toEdit = []

    const newObj = {
        "date": getCurrentDate(),
        "info": text
    }
    toEdit.push(newObj)

    localStorage.setItem("log", JSON.stringify(toEdit) )

}

export default logAction