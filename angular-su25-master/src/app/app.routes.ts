import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { UserListComponent } from './user-list/user-list';
import { CategoryList } from './category-list/category-list';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductList,
  },
 
  {
    path: 'user', 
    component: UserListComponent
  },
   {
    path: 'category', 
    component: CategoryList
  }
  
];
