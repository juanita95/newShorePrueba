import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {TableComponent} from './components/table/table.component';
import {MatPaginatorIntl} from '@angular/material/paginator';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [TableComponent],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: TableComponent
  }],
})
export class UtilsModule { }
