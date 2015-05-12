AmCharts.makeChart("chartdiv",
				{
					"type": "pie",
					"path": "http://www.amcharts.com/lib/3/",
					"angle": 28.8,
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"depth3D": 4,
					"titleField": "category",
					"valueField": "column-1",
					"visibleInLegendField": "Not set",
					"fontFamily": "Arial",
					"allLabels": [],
					"balloon": {},
					"legend": {
						"align": "center",
						"enabled": false,
						"markerType": "circle"
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Java",
							"column-1": "45"
						},
						{
							"category": "Matlab",
							"column-1": "25"
						},
						{
							"category": "HTML/CSS/JavaScript",
							"column-1": "15"
						},
						{
							"category": "C/C++",
							"column-1": "10"
						}
					]
				}
			);