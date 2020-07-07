import { CustomerState, customerReducer, getCustomers as getCustomersSelector} from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
  customers: CustomerState;
}

export const reducers = {
  customers: customerReducer,
};

// selctors
export const getState = (state: AppState) => state;
export const getCustomersState = createFeatureSelector<CustomerState>('customers');
export const getCustomers = createSelector(getCustomersState, getCustomersSelector);
// export const getCustomersSelect = (state: AppState) => state.customers.data;
export const getCustomerById = (id) => createSelector(getCustomers, (customers) => {
  if (customers) {
    return customers.find(customer => customer.id === id) || {};
  } else {
    return {};
  }
});
