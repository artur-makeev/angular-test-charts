import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chart } from './chart.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ChartsService {

	constructor(private http: HttpClient) { }

	getCharts(): Observable<Chart[]> {
		return this.http.get('assets/data.json').pipe(map((data: any) => {
			let chartList = data["chartList"];
			return chartList.map(function (chart: any): Chart {
				return new Chart(
					chart.id,
					chart.chartType,
					chart.chartName,
					chart.yAxisTitle,
					chart.seriesData,
					chart.rangeDescription,
					chart.seriesName,
					chart.seriesColor,
					chart.xAsixtype
				)
			})
		}))
	}
};

