import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer.model';

export const loadCustomers = createAction('[Customer] Load Customers');

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{customers: Customer[]}>()
);

export const loadCustomersFail = createAction(
  '[Customer] Load Customers Fail',
  props<any>()
);
