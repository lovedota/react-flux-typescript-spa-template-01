import dispatcher from "../../common/dispatcher";

export default {
    init() {
        dispatcher.dispatch({
            type: "manage-users/init"
        });
        setTimeout(() => {
            dispatcher.dispatch({
                type: "manage-users/init/success",
                users: [
                    {
                        id: 1,
                        name: "User 1"
                    },
                    {
                        id: 2,
                        name: "User 2"
                    },
                    {
                        id: 3,
                        name: "User 3"
                    },
                    {
                        id: 4,
                        name: "User 4"
                    }
                ]
            });
        }, 500);
    }
};
