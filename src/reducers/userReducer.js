import { REQUEST_ADDED, REQUEST_ADDED_SUCCESSFULLY, REQUEST_ADDED_ERROR } from "../types/index"

//cada reducer tiene su propio state

const initialState = {
    user: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}