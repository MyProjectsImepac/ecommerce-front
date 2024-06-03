import { Component } from '@angular/core';
import {MenuComponent} from '../menu/menu.component'
@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css'
})
export class HeaderMainComponent {

}
