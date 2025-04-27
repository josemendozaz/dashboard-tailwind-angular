import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBanknotesSolid, heroChartBarSolid, heroClockSolid, heroUserGroupSolid, heroUserPlusSolid } from '@ng-icons/heroicons/solid';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { SeriesOptionsType } from 'highcharts';

@Component({
	standalone	: true,
	selector	: 'app-home',
	imports		: [ NgIcon, HighchartsChartModule ],
	providers	: [
			provideIcons({
				heroBanknotesSolid,
				heroUserGroupSolid,
				heroUserPlusSolid,
				heroChartBarSolid,
				heroClockSolid
			})
	],
	templateUrl	: './home.component.html',
	styles		: ``
})
export class HomeComponent {
	Highcharts: typeof Highcharts = Highcharts;
	chartOptions: Highcharts.Options = {
		chart: {
		  type: 'column'
		},
		title: {
		  text: 'Comparación de Lluvias Promedio'
		},
		xAxis: {
		  categories: ['Tokyo', 'New York', 'London', 'Berlin', 'Paris']
		},
		yAxis: {
		  title: {
			text: 'Lluvia (mm)'
		  }
		},
		series: [
			{
			  name: 'Lluvia',
			  data: [49.9, 71.5, 106.4, 129.2, 144.0],
			  type: 'column' // Especifica el tipo de serie
			},
			{
			  name: 'Nieve',
			  data: [83.6, 78.8, 98.5, 93.4, 106.0],
			  type: 'column' // Especifica el tipo de serie
			}
		  ]
	};


	chartOptionsTwo : Highcharts.Options = {
		chart: {
		  type: 'column'
		},
		title: {
		  text: 'U.S Solar Employment Growth'
		},
		subtitle: {
			text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
			align: 'left'
		},
		xAxis: {
			accessibility: {
				rangeDescription: 'Range: 2010 to 2022'
			}
		},
		yAxis: {
		  title: {
			text: 'Number of Employees'
		  }
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
		series: [{
			name: 'Installation & Developers',
			data: [
				43934, 48656, 65165, 81827, 112143, 142383,
				171533, 165174, 155157, 161454, 154610, 168960, 171558
			],
			type: 'line' // Especifica el tipo de serie
		}],
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
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
	};


	chartOptionsThree : Highcharts.Options = {
		chart: {
		  type: 'pie',
		  options3d: {
			enabled: true,
			alpha: 45,
			beta: 0
		  }
		},
		title: {
		  text: 'Consumo del Navegador, Q1 2024'
		},
		tooltip: {
		  pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
		},
		plotOptions: {
		  pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			depth: 35,
			dataLabels: {
			  enabled: true,
			  format: '{point.name}'
			},
			innerSize: '60%', // Define el tamaño del agujero para crear el efecto de dona
			showInLegend: true
		  }
		},
		series: [{
		  name: 'Porcentaje',
		  data: [
			['Chrome', 61.41],
			['Internet Explorer', 11.84],
			['Firefox', 10.85],
			['Edge', 4.67],
			['Safari', 4.18],
			['Other', 7.05]
		  ],
		  type: 'pie' // Especifica el tipo de serie como 'pie'
		}],
		legend: { // Configuración de la leyenda
			layout: 'horizontal', // Puede ser 'horizontal' o 'vertical'
			align: 'center',    // Alineación horizontal: 'left', 'center', 'right'
			verticalAlign: 'bottom',  // Alineación vertical: 'top', 'middle', 'bottom'
			// width: 250,
			itemWidth: 120,
			itemDistance: 5,
			padding: 10,
			labelFormatter: function () {
				const point = this as any; // Hacemos un casting de this a any o Point
			  return point.name + ' ' + point.y + '%';
			},
			useHTML: false,
			title: {
			  text: 'Navegadores',
			  style: {
				fontWeight: 'bold',
			  },
			},
			// Esto es lo que hace que la leyenda se muestre en dos columnas
			//y que se ajuste al ancho del contenedor

		  }
	  };


}
