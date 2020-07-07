import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${environment.serverUrl}/users`);
  }

  updateCustomer(customer: Customer) {
    return this.httpClient.put(`${environment.serverUrl}/users/${customer.id}`, JSON.stringify(customer), this.httpOptions);
  }
}
