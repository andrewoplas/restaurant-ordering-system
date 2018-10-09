import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { OrderService } from '@services/order.service';
import { MessageService } from "@services/message.service";
import { MenuService } from "@services/menu.service";
import { AuthService } from "@services/auth.service";
import { MenuItemService } from '@services/menu-item.service';
import { FeedbackService } from '@services/feedback.service';
import { ErrorHandlerService } from '@services/error-handler.service';

@NgModule({
  providers: [
    OrderService,
    MessageService,
    MenuService,
    AuthService,
    MenuItemService,
    FeedbackService,
    ErrorHandlerService
  ],
  declarations: [  ]
  
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) {
      throw new Error('CoreModue Already Instantiated');
    }
  }
}
