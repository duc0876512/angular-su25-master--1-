import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CategoryList } from './category-list/category-list';
import { ProductDetail } from './product-detail/product-detail';
import { UserListComponent  } from "./user-list/user-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, CategoryList, ProductDetail, RouterLink, UserListComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-su25';
  stkChaGuiTien = '100000 trieu';
}
