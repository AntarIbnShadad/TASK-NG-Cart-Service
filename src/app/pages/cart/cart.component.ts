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
      this.currentCart = this._cartSevice.signalCart()

  }
  
  getTotalPrice(): number{
    //let filtered: number[] = []
    ///this._cartSevice.getCart().forEach(a => filtered.push(a.product.price+a.amount))
    //console.log(filtered)
    let price:number = this._cartSevice.signalCart().reduce((sum, current) => sum + (current.product.price*current.amount), 0 ) 
    //let price = filtered.reduce((sum, price) => sum + price, 0)
    
    console.log(price)
    return price;
  }
}
