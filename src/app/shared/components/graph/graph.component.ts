import { Input, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'
import { Chart } from 'src/app/chart-list/chart.model';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @Input() data!: Chart;

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: this.data.chartType
      },
      title: {
        text: this.data.chartName
      },
      yAxis: {
        title: {
          text: this.data.yAxisTitle
        }
      },

      xAxis: {
        type: this.data.xAsixtype,
        accessibility: {
          rangeDescription: this.data.rangeDescription
        }
      },
      series: [{
        name: this.data.seriesName,
        color: this.data.seriesColor,
        data: this.data.seriesData
      }
      ],
      subtitle: {
        text: null
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    }

    HC_exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}


