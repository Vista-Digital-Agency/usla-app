import { NgModule } from '@angular/core';
import { DateSorterPipe } from './date-sorter/date-sorter';
import { GroupSorterPipe } from './group-sorter/group-sorter';
import { SortByPipe } from './sort-by/sort-by';
import { FilterGroupSetsPipe } from './filter-group-sets/filter-group-sets';
import { SortPipe } from './sort/sort';
@NgModule({
	declarations: [DateSorterPipe,
    GroupSorterPipe,
    SortByPipe,
    FilterGroupSetsPipe,
    SortPipe],
	imports: [],
	exports: [DateSorterPipe,
    GroupSorterPipe,
    SortByPipe,
    FilterGroupSetsPipe,
    SortPipe]
})
export class PipesModule {}
