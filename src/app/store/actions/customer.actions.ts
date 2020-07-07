import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer.model';

// CREATE ACTIONS
export const loadCustomers = createAction('[Customer] Load Customers');

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{customers: Customer[]}>()
);

export const loadCustomersFail = createAction(
  '[Customer] Load Customers Fail',
  props<any>()
);

// UPDATE ACTIONS
export const updatedCustomer = createAction(
  '[Customer] Update Customer',
  props<Customer>()
);

export const updatedCustomerSuccess = createAction(
  '[Customer] Update Customer Success',
  props<Customer>()
);

export const updatedCustomerFail = createAction(
  '[Customer] Update Customer Fail',
  props<any>()
);
