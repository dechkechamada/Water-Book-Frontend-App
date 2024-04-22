import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WaterReadingFormComponent } from '../water-reading-form/water-reading-form.component';
import { ReadingsTableComponent } from '../readings-table/readings-table.component';
import { ReadingsChartComponent } from '../readings-chart/readings-chart.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { WaterReadingService } from '../service/water-reading.service';
import { WaterReading } from '../core/types';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReadingsChartDialogComponent } from '../readings-chart/readings-chart-dialog.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatExpansionModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    WaterReadingFormComponent,
    ReadingsTableComponent,
    ReadingsChartComponent,
    ReadingsChartDialogComponent,
    MatProgressBarModule,
    MatDialogModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tableRefreshInProgress: boolean = false;
  chartRefreshInProgress: boolean = false
  $waterReadings: any;
  tableReadings: WaterReading[] = [];
  chartReadings: WaterReading[] = [];

  constructor(private dialog: MatDialog, private waterReadingService: WaterReadingService) {
    this.$waterReadings = this.waterReadingService.getWaterReadings();
  }

  ngOnInit() {
    this.$waterReadings.subscribe((waterReadings: WaterReading[]) => {
      this.tableReadings = waterReadings;
      this.chartReadings = waterReadings;
    });
  }

  expandChart() {
    this.dialog.open(ReadingsChartDialogComponent, {    
      panelClass: 'transparent',
      maxWidth: '90vw',
      maxHeight: '90vh',
      width: '100%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '100ms',
      data: this.chartReadings
    });
  }

  onFormSumbmit() {
    this.refreshChart();
    this.refreshTable();
  }

  refreshTable() {
    this.tableRefreshInProgress = true;
    this.$waterReadings.subscribe((waterReadings: WaterReading[]) => {
      setTimeout(()=> {
        this.tableRefreshInProgress = false;
        this.tableReadings = waterReadings;
      },1200); // Adding artificial delay for demo
      
    });

  }

  refreshChart() {
    this.chartRefreshInProgress = true;
    this.$waterReadings.subscribe((waterReadings: WaterReading[]) => {
      this.chartRefreshInProgress = false;
      this.chartReadings = waterReadings;
    });
  }

}
