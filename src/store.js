import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers"

const store = configureStore({
    reducer: reducer
}
)

export default store