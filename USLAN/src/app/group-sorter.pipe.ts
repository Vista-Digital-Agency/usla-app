import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupSorter'
})
export class GroupSorterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
