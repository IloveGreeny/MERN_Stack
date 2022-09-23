import {Link} from "react-router-dom";

export const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Country Button</h1>
                </Link>
            </div>
        </header>
    )
}