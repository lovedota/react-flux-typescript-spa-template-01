import * as React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Navbar extends React.Component<any, any> {
    render() {
        const { pages } = this.props;

        const rows = [];

        pages.forEach((p, index) => {
            rows.push(
                <Link
                    key={index}
                    className={this.props.match.url === p.url ? "list-group-item active" : "list-group-item"}
                    to={p.url}
                    replace={true}
                >
                    {p.title}
                    <span className="badge glyphicon glyphicon-remove" style={{display: "block"}}/>
                </Link>
            );
        });

        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <div className="list-group">
                    {rows}
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);
