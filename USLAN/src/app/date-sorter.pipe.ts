import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSorter'
})
export class DateSorterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
