import { Injectable } from '@angular/core';
import { SearchCepService } from './search-cep.service';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly API_URL = 'http://10.10.10.215:8080/ecommerce';

  constructor(private searchCepService: SearchCepService, private http: HttpClient) { }

  searchCep(cep: string) {
    return this.searchCepService.find(cep);
  }

  save(customer: Customer) {
    console.log("Send ", customer)
    return this.http.post(`${this.API_URL}/customers`, customer);
  }
}
