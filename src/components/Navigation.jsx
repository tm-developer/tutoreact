import React from "react";
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {
    const location = useLocation();
    return (
        <div className="navigation">
            <ul>
                <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>
                    <li>Home</li>
                </Link>
                <Link to={"/liste"} className={location.pathname === "/liste" ? "active" : ""}>
                    <li>Liste de fruits</li>
                </Link>
                <Link to={"/films"} className={location.pathname === "/films" ? "active" : ""}>
                <li>Films</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navigation;