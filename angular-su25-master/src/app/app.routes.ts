import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { UserListComponent } from './user-list/user-list';
import { CategoryList } from './category-list/category-list';
import { ProductDetail } from './product-detail/product-detail';


export const routes: Routes = [
  {
    path: 'products',
    component: ProductList,
  },
 {
  path: 'product/:id',
  component: ProductDetail,
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
