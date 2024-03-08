import { put, takeLatest, call } from "redux-saga/effects";
import {
  FETCH_CUSTOMER_REQUEST,
  NEW_CUSTOMER_REQUEST,
  fetchCustomersFailure,
  fetchCustomersSuccess,
  newCustomerFailure,
  newCustomerSuccess,
} from "./customerAction";

function* fetchCustomers(action) {
  try {
    const { pagination, name, phone } = action.payload;
    const { page, limit } = pagination;

    const response = yield fetch(
      `http://localhost:3000/api/customer/?page=${page}&name=${name}&phone=${phone}&limit=${limit}`
    );

    const data = yield response.json();
    if (response.ok) {
      const customerList = data.response;
      const pagination = data.pagination;
      const payload = { customerList, pagination };
      yield put(fetchCustomersSuccess(payload));
    } else {
      console.error(`HTTP Error: ${response.status}`);
      yield put(fetchCustomersFailure(`HTTP Error: ${response.status}`));
    }
  } catch (error) {
    console.log(error)
    yield put(fetchCustomersFailure(`HTTP Error: ${error.status}`));
  }
}

function* newCustomer(action) {
  try {
    const {customerData} = action.payload
    const response = yield call(fetch, 'http://localhost:3000/api/customer/',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerData)
    } )

    if(response.ok) {
      yield put(newCustomerSuccess())
    } else {
      console.error(`HTTP Error: ${response.status}`);
      yield put(newCustomerFailure(`HTTP Error: ${response.status}`))
    }
  } catch (error) {
    yield put(newCustomerFailure(`HTTP Error: ${error.status}`))
  }
}

export function* watchFetchCustomers() {
    yield takeLatest(FETCH_CUSTOMER_REQUEST, fetchCustomers);
  }

  export function* watchNewCustomer() {
    yield takeLatest(NEW_CUSTOMER_REQUEST, newCustomer)
  }