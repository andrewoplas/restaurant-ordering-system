import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { OrderService } from '@services/order.service';
import { MessageService } from "@services/message.service";
import { MenuService } from "@services/menu.service";
import { AuthService } from "@services/auth.service";

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
