export const FETCH_CUSTOMER_REQUEST = "FETCH_CUSTOMER_REQUEST";
export const FETCH_CUSTOMER_SUCCESS = "FETCH_CUSTOMER_SUCCESS";
export const FETCH_CUSTOMER_FAILURE = "FETCH_CUSTOMER_FAILURE";

export const NEW_CUSTOMER_REQUEST = "NEW_CUSTOMER_REQUEST";
export const NEW_CUSTOMER_SUCCESS = "NEW_CUSTOMER_SUCCESS";
export const NEW_CUSTOMER_FAILURE = "NEW_CUSTOMER_FAILURE";

export const fetchCustomerRequest = (pagination, name, phone) => ({
  type: FETCH_CUSTOMER_REQUEST,
  payload: { pagination, name, phone },
});

export const fetchCustomersSuccess = (data) => ({
  type: FETCH_CUSTOMER_SUCCESS,
  payload: data,
});

export const fetchCustomersFailure = (error) => ({
  type: FETCH_CUSTOMER_FAILURE,
  payload: error,
});

export const newCustomerRequest = (customerData) => ({
  type: NEW_CUSTOMER_REQUEST,
  payload: { customerData },
});

export const newCustomerSuccess = () => ({
  type: NEW_CUSTOMER_SUCCESS
})

export const newCustomerFailure = (error) => ({
  type: NEW_CUSTOMER_FAILURE,
  payload: error
})
