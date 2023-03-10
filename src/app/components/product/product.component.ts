import { Component } from '@angular/core';

import { Product } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: Product = {
      id: '1',
      name: 'Product 1',
      image: 'assets/images/pexels-pixabay-266621.jpg',
      price: 100
  }

}
