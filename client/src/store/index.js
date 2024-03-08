import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchCustomers, watchNewCustomer } from "./actions/customerSaga";
import customersReducer from "./reducers/customersReducer";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        customers: customersReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(watchFetchCustomers)
sagaMiddleware.run(watchNewCustomer)

export default store