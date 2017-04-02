import "./styles/master-page.scss";

import * as React from "react";
import { withRouter } from "react-router";
import Navbar from "./nav-bar";
import Sidebar from "./side-bar";

class MasterPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar pages={this.props.pages}/>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MasterPage);
