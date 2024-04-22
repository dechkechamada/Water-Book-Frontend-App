import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { WaterReading } from '../core/types';

@Component({
  selector: 'app-readings-table',
  standalone: true,
  imports: [
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './readings-table.component.html',
  styleUrl: './readings-table.component.scss'
})
export class ReadingsTableComponent {
  displayedColumns: string[] = ['timestamp', 'flow', 'pressure'];
  dataSource!: MatTableDataSource<WaterReading>;

  @Input()
  waterReadings!: WaterReading[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<WaterReading>(this.waterReadings);
    this.dataSource.sortingDataAccessor = (ele, propName) => {
      switch (propName) {
        case 'timestamp': return new Date(ele.timestamp);
        default: return (ele as any)[propName];
      }
    };
    this.dataSource.paginator = this.paginator;
    setTimeout(() => { // To avoid ExpressionChangedAfterItHasBeenCheckedError, its fine if this is not done, but keeps the console clean
      this.dataSource.sort = this.sort; 
    });
  }
}

// const ELEMENT_DATA: WaterReading[] = [
//   {timestamp: '2024-04-20T18:48:44Z', flow: 0.4, pressure: 11.0079},
//   {timestamp: '2024-04-20T18:48:44Z', flow: 0.7, pressure: 4.0026},
//   {timestamp: '2024-04-20T18:48:44Z', flow: 1, pressure: 6.941},
//   {timestamp: '2024-04-19T18:48:44Z', flow: 0.9, pressure: 9.0122},
//   {timestamp: '2024-04-20T18:48:44Z', flow: 4, pressure: 10.811},
//   {timestamp: '2024-04-20T18:48:44Z', flow: 2, pressure: 12.0107},
//   {timestamp: '2024-04-17T18:48:44Z', flow: 3, pressure: 14.0067},
//   {timestamp: '2024-04-20T18:48:44Z', flow: 2.4, pressure: 15.9994},
//   {timestamp: '2024-04-20T18:48:44Z', flow: 1.8, pressure: 18.9984},
//   {timestamp: '2024-04-15T18:48:44Z', flow: 1.1, pressure: 20.1797},
// ];
