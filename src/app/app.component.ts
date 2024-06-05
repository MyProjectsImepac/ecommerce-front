import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMainComponent } from './components/header-main/header-main.component'
import { HomeProductsComponent } from "./components/home-products/home-products.component";
import { FooterMainComponent } from "./components/footer-main/footer-main.component";
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderMainComponent, HomeProductsComponent, FooterMainComponent]
})

export class AppComponent { }
