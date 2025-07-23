import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-creat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-creat.html',
  styleUrls: ['./product-creat.css']
})
export class ProductCreat {
  product = {
    name: '',
    price: 0,
    image: '',
    status: 'active'
  };

  onSubmit() {
    console.log('Dữ liệu sản phẩm:', this.product);
 
    
  }
}
