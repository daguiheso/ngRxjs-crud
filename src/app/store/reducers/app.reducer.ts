import { createReducer, on, Action } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { loadCustomers, loadCustomersSuccess, loadCustomersFail } from '../actions';

export interface CustomerState {
  data: Customer[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
};

const _customerReducer = createReducer(
  initialState,
  on(loadCustomers, (state) => ({...state, loading: true})),
  on(loadCustomersSuccess, (state, { customers }) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      data: customers,
    };
  }),
  on(loadCustomersFail, (state, error) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),
);

export function customerReducer(state: CustomerState, action: Action) {
  return _customerReducer(state, action);
}
