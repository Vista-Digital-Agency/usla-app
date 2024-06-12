import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filterGroupSets'
})
export class FilterGroupSetsPipe implements PipeTransform {

  transform(groupSets: any, genderSpecificEventBrackets: any): any {
    // filter items array, items which match and return true will be kept, false will be filtered out

    return groupSets.filter(item => genderSpecificEventBrackets.includes(item));
  }



}
