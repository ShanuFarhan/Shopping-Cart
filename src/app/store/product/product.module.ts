import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './product.reducer';
import { ProductEffects } from './product.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductModule {}
