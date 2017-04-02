import * as React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component<any, any> {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Flux Architecture</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/" title="Dashboard">Dashboard</Link>
                            </li> 
                            <li>
                                <Link to="/manage-users" title="Manage Users">Manage Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
