import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  constructor(private router: Router) { }

  onLogin() {
    this.router.navigate(['/login']);
  }
  onHome() {
    this.router.navigate(['/home']);
  }

  onCustomerAdd() {
    this.router.navigate(['/register']);
  }
}
