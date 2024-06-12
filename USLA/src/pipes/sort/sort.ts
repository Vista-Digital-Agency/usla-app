import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: Array<string>, arg: string): Array<string> {
    return Array.from(array).sort((item1: any, item2: any) => { 
			return this.orderByComparator(item2['place'], item1['place']);
		});
		}

		orderByComparator(a:any, b:any):number{
					//console.log(a);
					if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
						//Isn't a number so lowercase the string to properly compare
						if(a.toLowerCase() > b.toLowerCase()) return -1;
						if(a.toLowerCase() < b.toLowerCase()) return 1;
					}
					else{
						//Parse strings as numbers to compare properly
						if(parseFloat(a) > parseFloat(b)) return -1;
						if(parseFloat(a) < parseFloat(b)) return 1;
					 }
			
					return 0; //equal each other
			}
}
