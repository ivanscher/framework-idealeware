import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductCrossSellingComponent }  from './cross-selling.component';
import {ProductGridItemModule} from '../product-grid-item/product_grid_item.module';

@NgModule({
    declarations: [ ProductCrossSellingComponent ],
    imports: [ BrowserModule, ProductGridItemModule ],
    exports: [ ProductCrossSellingComponent ]
})
export class ProductCrossSellingModule {}