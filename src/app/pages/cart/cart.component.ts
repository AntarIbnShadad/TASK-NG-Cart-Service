import { Component } from '@angular/core';
import { CartService, Item } from '../../services/cart.service';
import { EventEmitter, Output } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../../data/products';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {

 currentCart: Item[] = []
  constructor(private _cartSevice:CartService){
      this.currentCart = this._cartSevice.getCart()

  }

  

}
