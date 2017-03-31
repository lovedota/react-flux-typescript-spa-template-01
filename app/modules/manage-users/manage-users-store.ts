import BaseStore from "../../common/base-store";

type ManageUsersPayload = {
    type: "manage-users/init"
} | {
    type: "manage-users/init/success",
    users: any[]
};

interface IPageView {
    url: string;
    title: string;
    store: any;
}

class ManageUsersStore extends BaseStore {
    data = {
        users: [],
        isLoading: false,
        isLoaded: false
    };

    get isLoading() {
        return this.data.isLoading;
    }

    get isLoaded() {
        return this.data.isLoaded;
    }

    get users() {
        return this.data.users;
    }

    __onDispatch(payload: ManageUsersPayload) {
        switch (payload.type) {
            case "manage-users/init":
                this.data.isLoading = true;

                this.__emitChange();

                break;

            case "manage-users/init/success":
                this.data.isLoading = false;
                this.data.isLoaded = true;
                this.data.users = [].concat(this.data.users , payload.users);

                this.__emitChange();

                break;
            default:
                break;
        }
    }
}

export default ManageUsersStore;
