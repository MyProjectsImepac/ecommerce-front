import { Component, input } from '@angular/core';
import { FooterMainComponent } from "../footer-main/footer-main.component";
import { HeaderMainComponent } from "../header-main/header-main.component";
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css',
  imports: [CommonModule, FooterMainComponent, HeaderMainComponent, FormsModule]
})
export class CustomerAddComponent {

  customer: Customer;
  success: boolean = false

  constructor(private customerService: CustomerService) {
    this.customer = new Customer('', '', '', '', '', '', '', '', '');
  }

  clearFields() {
    this.customer = new Customer('', '', '', '', '', '', '', '', '');
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

  onSubmit() {
    this.customerService.save(this.customer).subscribe({
      next: data => {
        console.log('Customer saved successfully', data);
      },
      error: error => {
        console.error('Customer not saved ', error);
      }
    });
    this.success = true;
    this.clearFields();
  }
}
