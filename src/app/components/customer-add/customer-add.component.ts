import { Component, input } from '@angular/core';
import { FooterMainComponent } from "../footer-main/footer-main.component";
import { HeaderMainComponent } from "../header-main/header-main.component";
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css',
  imports: [FooterMainComponent, HeaderMainComponent, FormsModule]
})
export class CustomerAddComponent {

  customer: Customer;

  constructor(private customerService: CustomerService) {
    this.customer = new Customer('', '', '', '', '', '', '', '', '');
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  onSearchButton() {
    this.customerService.searchCep(this.customer.cep).subscribe({
      next: data => {
        this.customer.endereco = data.logradouro;
        this.customer.cidade = data.localidade;
        this.customer.estado = data.uf;
      },
      error: error => {
        console.error('Erro ao buscar CEP', error);
      }
    });
  }
}
