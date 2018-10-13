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

// Interceptor
import { HTTPListener, HTTPStatus } from './interceptor/interceptor';

// Global Variables
import { Globals } from '@models/Globals';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const HTTPServices = [HTTPListener, HTTPStatus];

@NgModule({
  providers: [
    OrderService,
    MessageService,
    MenuService,
    AuthService,
    MenuItemService,
    FeedbackService,
    ErrorHandlerService,
    Globals,

    HTTPServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true
    }
    
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
