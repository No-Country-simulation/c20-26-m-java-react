import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../reducers/test";
import indexReducer from "../reducers/logUser";
import regUserReducer from "../reducers/regUser";

const store = configureStore({
    reducer: {
        test: testReducer,
        indexR: indexReducer,
        regUser: regUserReducer
    }
})

export default store;