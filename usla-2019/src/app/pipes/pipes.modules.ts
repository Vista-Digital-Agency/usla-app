import { NgModule } from '@angular/core';
import { FilterGroupSetsPipe } from './filter-group-sets.pipe';
import { GroupSorterPipe } from './group-sorter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { SortByPipe } from './sort-by.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
declarations: [FilterGroupSetsPipe, GroupSorterPipe, OrderByPipe, SortByPipe, SortPipe],
imports: [],
exports: [FilterGroupSetsPipe, GroupSorterPipe, OrderByPipe, SortByPipe, SortPipe],
})

export class PipesModule {}