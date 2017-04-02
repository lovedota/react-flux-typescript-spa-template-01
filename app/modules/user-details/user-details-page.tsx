import * as React from "react";
import { withRouter } from "react-router";
import MasterPage from "_master-page";
import PageService from "../../common/page-services";

import UserDetailsStore from "./user-details-store";
import UserDetailsAction from "./user-details-action";

class UserDetailsPage extends React.Component<any, any> {
    store = new UserDetailsStore();
    eventHandler: any;

    constructor() {
        super();

        this.state = {
            isLoaded: false,
            isLoading: false,
            user: null
        };
    }

    onStateChange() {
        this.setState(this.store.data);
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        PageService.getPageData(
            `/user-details/${userId}`,
            `User Details ${userId}`,
            this.store
        );

        this.eventHandler = this.store.addListener(this.onStateChange.bind(this));

        if (!this.store.data.isLoaded) {
            UserDetailsAction.init(this.props.match.params.id);
        } else {
            this.onStateChange();
        }
    }

    componentWillReceiveProps(nextProps) {
        const currentUserId = this.props.match.params.id;
        const newUserId = nextProps.match.params.id;

        if (this.props.match.params.id !== newUserId) {
            PageService.setPageData(`/user-details/${currentUserId}`, `User Details ${currentUserId}`, this.store.data);
            PageService.getPageData(`/user-details/${newUserId}`, `User Details ${newUserId}`, this.store);
            this.onStateChange();
        }
    }

    componentWillUnmount() {
        const userId = this.props.match.params.id;

        this.eventHandler.remove();

        PageService.setPageData(
            `/user-details/${userId}`, `User Details ${userId}`, this.store.data
        );
    }

    render() {
        const { isLoading, user } = this.state;

        let userDetails = <h3>Loading....</h3>;

        if (!isLoading && user) {
            userDetails = (
                <form>
                    <div className="form-group">
                        <label htmlFor="user-id">User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="user-id"
                            value={user.id}
                            disabled={true}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="user-name"
                            value={user.name}
                            onChange={() => console.log("Changed")}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="user-address"
                            value={user.address}
                            onChange={() => console.log("Changed")}
                        />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                    &nbsp;
                    <a
                        className="btn btn-default"
                        onClick={() => console.log(this.props.history.replace("/manage-users"))}
                    >
                        Back to List
                    </a>
                </form>
            );
        }

        return (
            <MasterPage pages={PageService.getPages()}>
                <h1 className="page-header">User Details</h1>
                {userDetails}
            </MasterPage>
        );
    }
}

export default withRouter(UserDetailsPage);
