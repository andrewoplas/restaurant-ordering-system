import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from '../../models/Feedback';

@Pipe({
  name: 'feedbackFilter'
})
export class FeedbackFilterPipe implements PipeTransform {

  transform(items: Feedback[], filter: number): number {
    let result : number;
    let sum : number;

    sum = 0;
    result = 0;

    if (!items || !filter) {
      return 0;
    }
    
    switch(filter){
      case 1: (items.filter((item: Feedback) => sum = sum + item.overallQuality)); break;
      case 2: (items.filter((item: Feedback) => sum = sum + item.foodQuality)); break;
      case 3: (items.filter((item: Feedback) => sum = sum + item.staffQuality)); break;
    }
    
    if(items.length == 0){
      result = sum;
    }
    else{
      result = sum / items.length;
    }

    return result;
  }

}
