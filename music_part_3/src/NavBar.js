
import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component
{
    render()
    {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand" href="#">My Music</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/">Main</a>
                            <a className="nav-item nav-link" href="/new">New</a>
                        </div>
                    </div>
                </nav> 
        )   
    }
}

export default NavBar;