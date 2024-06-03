import { Component } from '@angular/core';
import { FooterMainComponent } from "../footer-main/footer-main.component";
import { HeaderMainComponent } from "../header-main/header-main.component";

@Component({
    selector: 'app-customer-add',
    standalone: true,
    templateUrl: './customer-add.component.html',
    styleUrl: './customer-add.component.css',
    imports: [FooterMainComponent, HeaderMainComponent]
})
export class CustomerAddComponent {

}
