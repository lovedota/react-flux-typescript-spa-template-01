import * as React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import PageServices from "../page-services";

class Navbar extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            pages: PageServices.getPages()
        };
    }

    componentDidMount() {
        $("body").on("new-pages", () => {
            this.setState({
                pages: PageServices.getPages()
            });
        });
    }

    onLinkClick(data, event) {
        event.preventDefault();
        this.props.history.replace(data.url);
    }

    render() {
        const { pages } = this.state;

        const rows = [];

        pages.forEach((p, index) => {
            rows.push(
                <li key={index} className={this.props.match.url === p.url ? "active" : ""}>
                    <a href="#" onClick={this.onLinkClick.bind(this, p)}>{p.title}</a>
                </li>
            );
        });

        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    {rows}
                </ul>
            </div>
        );
    }
}

export default withRouter(Navbar);
