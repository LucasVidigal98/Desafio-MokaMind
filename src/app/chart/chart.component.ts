import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataTable } from '../table/table.component';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  dataSource: Array<DataTable> | undefined;

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLabels:Label[] = [];

  barChartData:ChartDataSets[] = [
    {data: [], label: 'Values'}
  ];

  barChartType:ChartType = "bar";

  barChartLegend = true;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      data.forEach((d, index) => {
        this.barChartLabels.push(d.name as string);
        this.barChartData[0].data?.push(d.value as number);
      });
    });
  }
}
