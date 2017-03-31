import { Store } from "flux/utils";
import Dispatcher from "./dispatcher";

class BaseStore extends Store<any> {
    constructor() {
        super(Dispatcher);
    }

    register() {
        Dispatcher.register(this.__onDispatch);
    }

    unregister() {
        Dispatcher.unregister(this.getDispatchToken());
    }
}

export default BaseStore;
