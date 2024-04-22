import { Component, Inject } from '@angular/core';
import { WaterReading } from '../core/types';
import { ReadingsChartComponent } from '../readings-chart/readings-chart.component';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-readings-chart-dialog',
    standalone: true,
    template: '<app-readings-chart [waterReadings]="data"></app-readings-chart>',
    styleUrl: './readings-chart.component.scss',
    imports: [ReadingsChartComponent]
})
export class ReadingsChartDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: WaterReading[]) {
    debugger;
  }
}


