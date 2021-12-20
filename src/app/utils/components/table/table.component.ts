import {AfterViewInit, Component, Input, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {BehaviorSubjectService} from '../../../core/services/behaviorSubject.service';
import {CharactersModel} from '../../../schools/models/characters.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends MatPaginatorIntl implements OnInit, AfterViewInit {

  @Input() columns: string[];
  @Input() columnsName: string[];
  @Input() title: string;
  @Input() description: string;
  @Input() columnImg: string;
  @Input() arrayElements: CharactersModel[] = [];
  @Output() dataModal = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any>;
  public sizeUsersTable: number = 5;
  public endIndex: number;
  public positionsImg: number;
  public filter: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.arrayElements);
  }

  /** set  paginator **/

  ngAfterViewInit(): void {
    const TIME_TO_RENDER = 100;
    setTimeout(() => {

        this.displayedColumns = this.columns;
        this.dataSource = new MatTableDataSource(this.arrayElements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.endIndex = Math.ceil(this.arrayElements.length / this.sizeUsersTable);
      },
      TIME_TO_RENDER);
  }

  /** set range of paginator **/

  getRangeLabel = (page: number, pageSize: number, length: number) =>  {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }

    const startIndex = page;
    return `${startIndex + 1}`;
  }

  /** get input value **/

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** apply filter only to name column  **/
  setupFilter(column: string) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const textToSearch = data[column] && data[column].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }


}
