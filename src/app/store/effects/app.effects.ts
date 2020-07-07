import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CustomerService } from '../../services/customer.service';
import { loadCustomers, loadCustomersSuccess, loadCustomersFail } from '../actions/customer.actions';

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
}
