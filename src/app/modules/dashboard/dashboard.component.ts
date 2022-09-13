import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/chart-list/chart.model';
import { ChartsService } from 'src/app/chart-list/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ChartsService]
})
export class DashboardComponent implements OnInit {

  charts: Chart[] = [];

  constructor(private httpService: ChartsService) { }

  ngOnInit(): void {
    this.httpService.getCharts().subscribe({ next: (data: Chart[]) => this.charts = data });
  }

  // show = this.charts.length > 0 ? true : false;
  show = true;



}
