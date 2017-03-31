import * as React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "flux/utils";
import MasterPage from "_master-page";
import PageService from "../../common/page-services";

import ManageUsersStore from "./manage-users-store";
import ManageUsersAction from "./manage-users-action";

const store = new ManageUsersStore();

class ManageUsersPage extends React.Component<any, any> {
    static getStores(props) {
        PageService.getPageData("/manage-users", store);

        return [store];
    }

    static calculateState(prevState, props) {
        return store.data;
    }

    componentDidMount() {
        if (!this.state.isLoaded) {
             ManageUsersAction.init();
        }
    }

    componentWillUnmount() {
        PageService.setPageData(
            "/manage-users", "Manage Users", store.data
        );
    }

    render() {
        const {isLoading, users} = this.state;

        let userList = <h3>Loading....</h3>;

        if (!isLoading) {
            const rows = [];

            users.forEach((u, index) => {
                rows.push(
                    <tr key={index}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td><Link to={`/user-details/${u.id}`}>Edit</Link></td>
                    </tr>
                );
            });

            userList = (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            );
        }

        return (
            <MasterPage>
                <h1 className="page-header">Manage Users</h1>
                {userList}
            </MasterPage>
        );
    }
}

export default withRouter(Container.create(ManageUsersPage, {withProps: true}));
