import { Pipe, PipeTransform } from '@angular/core';
import { Order, MenuItemQuantity } from '@models/Order';
import { MenuItem } from '@models/MenuItem';

@Pipe({
  name: 'menuItemFilter'
})
export class MenuItemFilterPipe implements PipeTransform {

    transform(items: Order[], filter: string): MenuItemQuantity[] {
        let result : MenuItemQuantity[] = [];
        let dict : Object;
        dict = new Object();
        
        if (!items || !filter) return [];
        
        let i : number;
        for(i = 0; i < items.length; i++){
            if(filter == "1" && items[i].status == "paid") { // DAILY
                if(new Date(items[i].dateCreated).toLocaleDateString("en-US") === new Date().toLocaleDateString("en-US")){
                    items[i].menuItem.filter((menuItem: MenuItemQuantity) => dict[menuItem.id] == null ? dict[menuItem.id] = menuItem.quantity : dict[menuItem.id] += menuItem.quantity);
                }
            }
            else if(filter == "2" && items[i].status == "paid") { // WEEKLY
                var curr = new Date;
                var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
                var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));
                if(new Date(items[i].dateCreated).getDate() >= firstday.getDate() && new Date(items[i].dateCreated).getDate() <= lastday.getDate()){
                    items[i].menuItem.filter((menuItem: MenuItemQuantity) => dict[menuItem.id] == null ? dict[menuItem.id] = menuItem.quantity : dict[menuItem.id] += menuItem.quantity);
                }
            }
            else if(filter == "3" && items[i].status == "paid") { // MONTHLY
                if((new Date(items[i].dateCreated).getMonth() == new Date().getMonth()) && new Date(items[i].dateCreated).getFullYear() == new Date().getFullYear()){
                    items[i].menuItem.filter((menuItem: MenuItemQuantity) => dict[menuItem.id] == null ? dict[menuItem.id] = menuItem.quantity : dict[menuItem.id] += menuItem.quantity);
                }
            }
            else if(filter == "4" && items[i].status == "paid") { // YEARLY
                if((new Date(items[i].dateCreated).getFullYear() == new Date().getFullYear())){
                    items[i].menuItem.filter((menuItem: MenuItemQuantity) => dict[menuItem.id] == null ? dict[menuItem.id] = menuItem.quantity : dict[menuItem.id] += menuItem.quantity);
                }
            }
        }

        var output = [], item;

        for (var id in dict) {
            item = {};
            item.id = id;
            item.quantity = dict[id];
            output.push(item);
        }

        function compare(a,b) {
            if (a.quantity < b.quantity)
              return 1;
            if (a.quantity > b.quantity)
              return -1;
            return 0;
        }

        output.sort(compare);
        if(output.length > 5) {
            output = output.slice(0,5);
        }

        let menu : MenuItemQuantity;
        for(i = 0; i < output.length; i++){
            menu = {
                id : output[i].id,
                price : 0,
                onSale : false,
                quantity : output[i].quantity,
                item : getItem(output[i].id)
            }
            result.push(menu);
        }

        function getItem(id){
            let result : MenuItem;
            var menuLength = 0;
            for(var i = 0; i < items.length; i++){
                for(var j = 0; j < items[i].menuItem.length; j++){
                    if(items[i].menuItem[j].id == id){
                        result = items[i].menuItem[j].item;
                        break;
                    }
                }
            }
            return result;
        }
        
        return result;
    }

    
}
