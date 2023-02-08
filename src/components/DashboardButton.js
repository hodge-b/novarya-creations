import 'remixicon/fonts/remixicon.css';

function DashboardButton({ childClass, icon, title, onclick }) {
    return (
        <div className={`${childClass} col-12 col-sm-5 px-1 py-2 py-sm-5 my-3 container border btn`} onClick={onclick}>
            <i className={`${childClass} ${icon} display-1`}></i>
            <p className={`${childClass} mt-3 display-5`}>{title}</p>
        </div>
    );
}
export default DashboardButton;