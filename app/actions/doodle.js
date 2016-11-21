export const LIST_DOODLE = 'FETCH_DOODLE_LIST';
export const ADD_DOODLE = 'ADD_DOODLE';

export function replaceDoodleList(doodleList) {
    return {
        type: LIST_DOODLE,
        value: doodleList
    };
}

export function fetchDoodleList(period) {
    return (dispatch, getState) => {
        const {reference} = getState().firebaseDoodle;

        reference.orderByChild('createdAt').startAt(period.start).endAt(period.end).once('value', (snapshot) => {
            let doodleList = [];
            snapshot.forEach((child) => {
                var doodle = child.val();
                doodleList.push({
                    content: doodle.content,
                    createdAt: doodle.createdAt,
                    imageUrl: doodle.imageUrl || doodle.imageUrl === "" ? {uri: doodle.imageUrl} : require("../../images/act_logo.png"),
                    title: doodle.title,
                    url: doodle.url || null
                });
            });

            dispatch(replaceDoodleList(doodleList));
        });
    };
}

export function addDoodle(doodle) {
    return (dispatch, getState) => {
        const {doodleReference} = getState();

        doodleReference.push(doodle);
    };
}