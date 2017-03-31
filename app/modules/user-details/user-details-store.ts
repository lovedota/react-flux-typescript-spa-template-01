import BaseStore from "../../common/base-store";

type UserDetailsPayload = {
    type: "user-details/init"
} | {
    type: "user-details/init/success",
    user: any
};

interface IPageView {
    url: string;
    title: string;
    store: any;
}

class UserDetailsStore extends BaseStore {
    data = {
        user: null,
        isLoading: false,
        isLoaded: false
    };

    __onDispatch(payload: UserDetailsPayload) {
        switch (payload.type) {
            case "user-details/init":
                this.data.isLoading = true;

                this.__emitChange();

                break;

            case "user-details/init/success":
                this.data.isLoading = false;
                this.data.isLoaded = true;
                this.data.user = Object.assign({}, payload.user);

                this.__emitChange();

                break;
            default:
                break;
        }
    }
}

export default UserDetailsStore;
