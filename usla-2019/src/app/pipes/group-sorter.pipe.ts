import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupSorter'
})
export class GroupSorterPipe implements PipeTransform {

  transform(competitors: any[], group: any, adult: any): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    
    if (adult == true) {
      //console.log(group);
      return competitors.filter(item => item.ageGroupName.indexOf(group) !== -1);
    } else {
      return competitors.filter(item => item.scoreId.indexOf(group) !== -1);
    }
    
}

}
