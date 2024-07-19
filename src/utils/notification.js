const setNotification = (setAlert, message, color) => {
    setAlert([message, color])

    setTimeout(() => {
        setAlert(null);
    }, 5000);
}

export default setNotification