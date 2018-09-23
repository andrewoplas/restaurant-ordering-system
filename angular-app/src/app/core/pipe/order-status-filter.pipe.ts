import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../entity/Order';

@Pipe({
  name: "orderStatusFilter"
})
export class OrderStatusFilterPipe implements PipeTransform {
  transform(items: Order[], filter: string): number {
    if (!items || !filter) {
      return 0;
    }
    
    return (items.filter((item: Order) => item.status == filter)).length;
  }
}
