export class Chart {
	constructor(
		public id: string,
		public chartType: string,
		public chartName: string,
		public yAxisTitle: string,
		public seriesData: any,
		public rangeDescription: string,
		public seriesName: string,
		public seriesColor?: string,
		public xAsixtype?: string
	) { }


}

