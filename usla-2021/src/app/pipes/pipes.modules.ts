import { NgModule } from '@angular/core';
import { OrderByPipe } from './order-by.pipe';
import { SortByPipe } from './sort-by.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
declarations: [OrderByPipe, SortByPipe, SortPipe],
imports: [],
exports: [OrderByPipe, SortByPipe, SortPipe],
})

export class PipesModule {}