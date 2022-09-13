export interface chartData {
	chart?: {
		type: string //type: 'bar' или 'area' для линейного ничего
	},
	title: {
		text: string
	},
	yAxis: {
		title: {
			text: string
		}
	},

	xAxis: {
		type?: string
		accessibility: {
			rangeDescription: string
		}
	},
	series: [{
		name: string,
		color?: string
		data: any
	}
	]
};

let chartsArr: chartData[] = [{
	chart: {
		type: "line"
	},
	title: {
		text: 'Chart Title 1'
	},
	yAxis: {
		title: {
			text: 'Number of Employees'
		}
	},
	xAxis: {
		type: 'datetime',
		accessibility: {
			rangeDescription: 'Range: 2010 to 2020'
		}
	},
	series: [{
		name: 'Installation & Developers',
		data: [
			[Date.UTC(2022, 0, 1), 29.9],
			[Date.UTC(2022, 2, 1), 71.5],
			[Date.UTC(2022, 3, 1), 106.4]]
	}
	]
},
{
	chart: {
		type: "bar"
	},
	title: {
		text: 'Chart Title 2'
	},
	yAxis: {
		title: {
			text: 'Number of Employees'
		}
	},
	xAxis: {
		type: 'datetime',
		accessibility: {
			rangeDescription: 'Range: 2010 to 2020'
		}
	},
	series: [{
		name: 'Installation & Developers',
		data: [
			[Date.UTC(2022, 0, 1), 29.9],
			[Date.UTC(2022, 2, 1), 71.5],
			[Date.UTC(2022, 3, 1), 106.4]]
	}
	]
},
{
	chart: {
		type: "area"
	},
	title: {
		text: 'Chart Title 3'
	},
	yAxis: {
		title: {
			text: 'Number of Employees'
		}
	},
	xAxis: {
		type: 'datetime',
		accessibility: {
			rangeDescription: 'Range: 2010 to 2020'
		}
	},
	series: [{
		name: 'Installation & Developers',
		data: [
			[Date.UTC(2022, 0, 1), 29.9],
			[Date.UTC(2022, 2, 1), 71.5],
			[Date.UTC(2022, 3, 1), 106.4]]
	}
	]
},
{
	chart: {
		type: "bar"
	},
	title: {
		text: 'Chart Title 4'
	},
	yAxis: {
		title: {
			text: 'Number of Employees'
		}
	},

	xAxis: {
		type: 'datetime',
		accessibility: {
			rangeDescription: 'Range: 2010 to 2020'
		}
	},
	series: [{
		name: 'Installation & Developers',
		color: 'red',
		data: [
			[Date.UTC(2022, 0, 1), 29.9],
			[Date.UTC(2022, 2, 1), 71.5],
			[Date.UTC(2022, 3, 1), 106.4]]
	}
	]
},
{
	chart: {
		type: "spline"
	},
	title: {
		text: 'Chart Title 5'
	},
	yAxis: {
		title: {
			text: 'Number of Employees'
		}
	},
	xAxis: {
		type: 'datetime',
		accessibility: {
			rangeDescription: 'Range: 2010 to 2020'
		}
	},
	series: [{
		name: 'Installation & Developers',
		data: [
			[Date.UTC(2022, 0, 1), 29.9],
			[Date.UTC(2022, 2, 1), 71.5],
			[Date.UTC(2022, 3, 1), 106.4]]
	}
	]
}
];

export { chartsArr };