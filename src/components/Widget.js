import 'remixicon/fonts/remixicon.css';

function Widget({ childClass, title, sku, onclick }) {
    return (
        <div className={`${childClass} px-1 py-2 my-3 container border`} onClick={onclick}>
            <p className={`${childClass} mt-3 display-5`}>{title}</p>
            <small className=''>{sku}</small>
        </div>
    );
}
export default Widget;