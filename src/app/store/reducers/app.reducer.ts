import { State, createReducer, on, Action } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { loadCustomers } from '../actions';

export interface CustomerState {
  data: Customer[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [
    {
      id: 1,
      name: 'Luis',
      age: 20,
      email: 'pepe@gmail.com',
    },
    {
      id: 2,
      name: 'Daniel H',
      age: 22,
      email: 'pepe3@gmail.com',
    },
  ],
  loaded: false,
  loading: false,
  error: null,
};

const _customerReducer = createReducer(
  initialState,
  on(loadCustomers, (state) => ({...state, loading: true})),
);

export function customerReducer(state: State<CustomerState>, action: Action) {
  return _customerReducer(state, action);
}
