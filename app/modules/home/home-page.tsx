import * as React from "react";
import { withRouter } from "react-router";
import MasterPage from "_master-page";
import PageService from "../../common/page-services";
import HomeStore from "./home-store";
import { Container } from "flux/utils";

const store = new HomeStore();

class HomePage extends React.Component<any, any> {
    static getStores(props) {
        PageService.getPageData("/", "Home", store);

        return [store];
    }

    static calculateState(prevState, props) {
        return {

        };
    }
    render() {
        return (
            <MasterPage pages={PageService.getPages()}>
                <h1 className="page-header">Dashboard</h1>
            </MasterPage>
        );
    }
}

export default withRouter(Container.create(HomePage, {withProps: true}));
