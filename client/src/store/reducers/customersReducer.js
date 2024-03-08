import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from "../actions/customerAction";

const initialState = {
  customerList: [],
  currentPage: 0,
  totalItem: 0,
  startItem: 0,
  endItem: 0,
  loading: false,
  error: null,
};

const CustomersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customerList: action.payload.customerList,
        currentPage: action.payload.pagination.currentPage,
        totalItem: action.payload.pagination.totalItem,
        startItem: action.payload.pagination.startItem,
        endItem: action.payload.pagination.endItem,
        error: null,
      };
    case FETCH_CUSTOMER_FAILURE:
        return {
            ...state,
            customerList: [],
            currentPage: 0,
            totalItem: 0,
            startItem: 0,
            endItem: 0,
            loading: false,
            error: action.payload
        }
    default:
      return state;
  }
};

export default CustomersReducer