import BaseStore from "../../common/base-store";

type HomeStorePayload = {
    url: string,
    store: any,
    type: "home-store/change-page"
};

interface IPageView {
    url: string;
    title: string;
    store: any;
}

class HomeStore extends BaseStore {
    data = {};
    __onDispatch(payload: HomeStorePayload) {
        switch (payload.type) {
            case "home-store/change-page":
                break;
            default:
                break;
        }
    }
}

export default HomeStore;
