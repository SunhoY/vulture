export default function someReducer(state = {}, action) {
    console.log(action, state);

    switch (action.type) {
        case "temp":
            let assign = Object.assign({}, state, {
                testState: 1
            });
            console.log(assign);
            return assign;

        default:
            return state;
    }
}