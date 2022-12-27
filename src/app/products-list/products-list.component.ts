import { Component } from '@angular/core';
import { productMock } from 'src/app/shared/products/product.mock';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  readonly product = productMock;
}
