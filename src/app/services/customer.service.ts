import { Injectable } from '@angular/core';
import { SearchCepService } from './search-cep.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private searchCepService: SearchCepService) {}

  searchCep(cep: string) {
    return this.searchCepService.find(cep);
  }
}
