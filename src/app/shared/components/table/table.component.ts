import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditChartComponent } from '../edit-chart/edit-chart.component';
import { chartsArr } from 'src/app/mock-data/charts-data';

import { Chart } from 'src/app/chart-list/chart.model';
import { ChartsService } from 'src/app/chart-list/chart.service';


interface ChartDescr {
  position: number;
  name: string;
  type: string | undefined;
  color: string | undefined;
}

const CHART_DATA: ChartDescr[] = chartsArr.map(
  (chart, index) => {
    return {
      position: index + 1,
      name: chart.title.text,
      type: chart.chart?.type,
      color: chart.series[0].color
    }
  }
)


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [ChartsService]
})
export class TableComponent implements OnInit {

  charts: Chart[] = [];

  constructor(
    public dialog: MatDialog,
    private httpService: ChartsService
  ) { }

  ngOnInit(): void {
    this.httpService.getCharts().subscribe({ next: (data: Chart[]) => this.charts = data });

  }
  chartsArr = chartsArr;
  editChart() {
    this.dialog.open(EditChartComponent, {
      width: '300px'
    });
  }

  displayedColumns: string[] = ['position', 'name', 'type', 'color', 'action'];
  dataSource = CHART_DATA;



}
