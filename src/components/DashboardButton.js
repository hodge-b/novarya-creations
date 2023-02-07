import 'remixicon/fonts/remixicon.css';

function DashboardButton({ childClass, icon, title, onclick }) {
    return (
        <div className={`${childClass} px-1 py-2 my-3 container border`} onClick={onclick}>
            <i className={`${childClass} ${icon} display-1`}></i>
            <p className={`${childClass} mt-3 display-5`}>{title}</p>
        </div>
    );
}
export default DashboardButton;