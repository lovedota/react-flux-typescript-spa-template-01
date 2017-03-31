import dispatcher from "../../common/dispatcher";

export default {
    init(userId) {
        dispatcher.dispatch({
            type: "user-details/init"
        });

        setTimeout(() => {
            dispatcher.dispatch({
                type: "user-details/init/success",
                user: {
                    id: userId,
                    name: `Name ${userId}`,
                    address: `Address ${userId}`
                }
            });
        }, 500);
    }
};
