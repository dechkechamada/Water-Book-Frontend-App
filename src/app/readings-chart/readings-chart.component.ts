import { Component, Inject, Input } from '@angular/core';
import { AgChartsAngular } from 'ag-charts-angular';
import { AgChartOptions } from "ag-charts-community";
import { WaterReading } from '../core/types';

@Component({
  selector: 'app-readings-chart',
  standalone: true,
  imports: [AgChartsAngular],
  templateUrl: './readings-chart.component.html',
  styleUrl: './readings-chart.component.scss'
})
export class ReadingsChartComponent {
  options!: AgChartOptions;
  @Input()
  waterReadings!: WaterReading[];

  constructor() {}

  ngOnChanges() {
    this.options = {
      data: this.waterReadings,
      title: {
        text: "Water Readings Report",
        fontSize: 18,
      },
      series: [
        {
          type: "bar",
          xKey: "timestamp",
          yKey: "flow",
          yName: "Water Flow",
          strokeWidth: 4,
        },
        {
          type: "bar",
          xKey: "timestamp",
          yKey: "pressure",
          yName: "Water Pressure",
          strokeWidth: 4,
         
        }
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          tick: {
            enabled: true
          },
          label: {
            formatter: ({ value }) => value.substr(0,19),
          },
        },
        {
          type: "number",
          position: "left",
          keys: ["flow"],
          title: {
            text: "Flow of water",
          }
        },
        {
          type: "number",
          position: "right",
          keys: ["pressure"],
          title: {
            enabled: true,
            text: "Pressure of water",
          }
        },
      ],
      legend: {
        item: {
          marker: {
            shape: "square",
            strokeWidth: 0,
          },
        },
      },
    };

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

