import BaseStore from "../base-store";

type MasterPayload = {
    url: string,
    store: any,
    type: "master-page/change-page"
};

interface IPageView {
    url: string;
    title: string;
    store: any;
}

class MasterStore extends BaseStore {
    private _pages = new Map<string, IPageView>();

    __onDispatch(payload: MasterPayload) {
        switch (payload.type) {
            case "master-page/change-page":
                this._pages.set(payload.url, payload.store);

                break;
            default:
                break;
        }
    }
}
