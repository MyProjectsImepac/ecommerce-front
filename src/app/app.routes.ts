import { Routes } from '@angular/router';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeProductsComponent },
    { path: 'register', component: CustomerAddComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
