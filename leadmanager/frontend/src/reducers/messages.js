import { CREATE_MESSAGE } from "../actions/types.js";

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_MESSAGE:
            return (state = payload)
        default:
            return state;
    }
};
