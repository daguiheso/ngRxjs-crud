import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';

import { CustomerService } from '../../services/customer.service';
import { loadCustomers, loadCustomersSuccess, loadCustomersFail, updatedCustomer, updatedCustomerSuccess, updatedCustomerFail } from '../actions/customer.actions';
import { Customer } from '../../models/customer.model';

@Injectable()

export class CustomerEffects {
  constructor(private actions$: Actions, private customerService: CustomerService) {}

  loadCustomers$: Observable<Actions> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCustomers),
      mergeMap(() =>
        this.customerService.getCustomers()
          .pipe(
            map(response => loadCustomersSuccess({ customers: response })),
            catchError(error => of(loadCustomersFail({ error })))
          ),
      ),
    );
  });

  updateCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatedCustomer),
      mergeMap(action => {
        const { name, email, age, id } = action;
        return this.customerService.updateCustomer({name, age, email, id})
          .pipe(
            map((data: Customer) => {
              return updatedCustomerSuccess(data);
            }),
            catchError(error => of(updatedCustomerFail(error)))
          );
      })
    );
  });
}
