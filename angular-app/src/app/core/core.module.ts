import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusFilterPipe } from './pipe/order-status-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderStatusFilterPipe]
})
export class CoreModule { }
