import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingFiltersComponent } from './shopping-filters/shopping-filters.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { ProductItemComponent } from './shopping-list/product-item/product-item.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingCartComponent,
    ShoppingComponent,
    ShoppingFiltersComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingRoutingModule,
    MatPaginatorModule
  ]
})
export class ShoppingModule { }
