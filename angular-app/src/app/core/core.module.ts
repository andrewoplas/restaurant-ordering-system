import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { OrderService } from '../core/services/order.service';
import { MessageService } from "../core/services/message.service";
import { MenuService } from "../core/services/menu.service";
import { AuthService } from "../core/services/auth.service";

@NgModule({
  providers: [
    OrderService,
    MessageService,
    MenuService,
    AuthService,
  ]
  
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) {
      throw new Error('CoreModue Already Instantiated');
    }
  }

}
