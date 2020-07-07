import { createReducer, on, Action } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { loadCustomers, loadCustomersSuccess, loadCustomersFail } from '../actions';
import { updatedCustomerSuccess } from '../actions/customer.actions';

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
  on(loadCustomers, (state) => ({ ...state, loading: true })),

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

  on(updatedCustomerSuccess, (state, data) => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  })
);

export function customerReducer(state: CustomerState, action: Action) {
  return _customerReducer(state, action);
}


export const getCustomers = (state: CustomerState) => state.data;
export const getCustomersLoaded = (state: CustomerState) => state.loaded;
export const getCustomersLoading = (state: CustomerState) => state.loading;
export const getCustomersError = (state: CustomerState) => state.error;
