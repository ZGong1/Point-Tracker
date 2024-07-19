// alert = [message, color]
const Notification = ({alert}) => {

    if (!alert) return

    return ( 
        <div className={`alert ${alert[1]}`}>
            {alert[0]}
        </div>
    );
}
 
export default Notification;