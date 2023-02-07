import { Link } from "react-router-dom";

function Home() {
    return (
        <section className='p-1 container text-center'>
            <div className="p-5 container">
                <h1 className='display-4'>Welcome to Novarya Creations!</h1>
                <p className='mt-5'>This site is currently under construction.</p>
                <p>If you are the website's administrator, <Link to='/dashboard'>login here.</Link></p>
            </div>
        </section>
    )
}
export default Home;