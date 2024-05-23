//[Dashboard Javascript]

//Project:	Riday - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	 
	var options = {
          series: [{
          name: 'Revenue',
          data: [31, 50, 28, 70, 45, 90, 140]
        }],
          chart: {
          height: 350,
          type: 'area',
			 zoom: {
			  enabled: false
			},
        },
		colors: ["#4c95dd"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Set", "Sun"]
        },
        tooltip: {
         y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
		
	
	
	var options = {
	  chart: {
		  height: 325,
		  type: 'bar',
		  toolbar: {
			  show: false
		  },
	  },
	  plotOptions: {
		  bar: {
			  horizontal: false,
			  endingShape: 'rounded',
			  columnWidth: '65%',
		  },
	  },
	  dataLabels: {
		  enabled: false
	  },
	  stroke: {
		  show: true,
		  width: 5,
		  colors: ['transparent']
	  },
	  colors: ["#e66430", "#4c95dd"],
	  series: [{
		  name: 'In Restaurant',
		  data: [70, 45, 51, 58, 59, 58, 61]
	  }, {
		  name: 'Online Order',
		  data: [55, 71, 80, 100, 89, 98, 110]
	  },],
	  xaxis: {
		  categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Set", "Sun"],
		  axisBorder: {
			show: true,
			color: '#bec7e0',
		  },  
		  axisTicks: {
			show: true,
			color: '#bec7e0',
		  },    
	  },
	  legend: {
          show: false,
        },
	  fill: {
		  opacity: 1

	  },
	  grid: {
		  row: {
			  colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
			  opacity: 0.2
		  },
		  borderColor: '#f1f3fa'
	  },
	  tooltip: {
		  y: {
			  formatter: function (val) {
				  return "$" + val + "k"
			  }
		  }
	  }
	}

	var chart = new ApexCharts(
	  document.querySelector("#yearly-comparison"),
	  options
	);

	chart.render();
	
	
	
	$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 20,
			responsiveClass: true,
			autoplay: true,
			dots: false,
			nav: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  1024: {
				items: 2,
			  },
			  1600: {
				items: 3,
			  },
			  2000: {
				items: 4,
			  }
			}
		  });
	
	
	am4core.ready(function() {

	// Themes begin
	am4core.useTheme(am4themes_kelly);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// Define marker path
	var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

	// Create map instance
	var chart = am4core.create("chartdiv", am4maps.MapChart);
	var interfaceColors = new am4core.InterfaceColorSet();

	// Set map definition
	chart.geodata = am4geodata_worldLow;

	// Set projection
	chart.projection = new am4maps.projections.Mercator();

	// Add zoom control
	chart.zoomControl = new am4maps.ZoomControl();

	// Set initial zoom
	chart.homeZoomLevel = 2.5;
	chart.homeGeoPoint = {
	  latitude: 51,
	  longitude: -23
	};

	// Create map polygon series
	var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
	polygonSeries.exclude = ["AQ"];
	polygonSeries.useGeodata = true;
	polygonSeries.mapPolygons.template.nonScalingStroke = true;

	// Add images
	var imageSeries = chart.series.push(new am4maps.MapImageSeries());
	var imageTemplate = imageSeries.mapImages.template;
	imageTemplate.tooltipText = "{title}";
	imageTemplate.nonScaling = true;

	var marker = imageTemplate.createChild(am4core.Sprite);
	marker.path = targetSVG;
	marker.horizontalCenter = "middle";
	marker.verticalCenter = "middle";
	marker.scale = 0.7;
	marker.fill = interfaceColors.getFor("alternativeBackground");

	imageTemplate.propertyFields.latitude = "latitude";
	imageTemplate.propertyFields.longitude = "longitude";
	imageSeries.data = [ {
	  "id": "london",
	  "svgPath": targetSVG,
	  "title": "London",
	  "latitude": 51.5002,
	  "longitude": -0.1262,
	  "scale": 1
	}, {
	  "svgPath": targetSVG,
	  "title": "Brussels",
	  "latitude": 50.8371,
	  "longitude": 4.3676,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Prague",
	  "latitude": 50.0878,
	  "longitude": 14.4205,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Athens",
	  "latitude": 37.9792,
	  "longitude": 23.7166,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Reykjavik",
	  "latitude": 64.1353,
	  "longitude": -21.8952,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Dublin",
	  "latitude": 53.3441,
	  "longitude": -6.2675,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Oslo",
	  "latitude": 59.9138,
	  "longitude": 10.7387,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Lisbon",
	  "latitude": 38.7072,
	  "longitude": -9.1355,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Moscow",
	  "latitude": 55.7558,
	  "longitude": 37.6176,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Belgrade",
	  "latitude": 44.8048,
	  "longitude": 20.4781,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Bratislava",
	  "latitude": 48.2116,
	  "longitude": 17.1547,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Ljubljana",
	  "latitude": 46.0514,
	  "longitude": 14.5060,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Madrid",
	  "latitude": 40.4167,
	  "longitude": -3.7033,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Stockholm",
	  "latitude": 59.3328,
	  "longitude": 18.0645,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Bern",
	  "latitude": 46.9480,
	  "longitude": 7.4481,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Kiev",
	  "latitude": 50.4422,
	  "longitude": 30.5367,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "Paris",
	  "latitude": 48.8567,
	  "longitude": 2.3510,
	  "scale": 0.5
	}, {
	  "svgPath": targetSVG,
	  "title": "New York",
	  "latitude": 40.43,
	  "longitude": -74,
	  "scale": 0.5
	} ];

	// Add lines
	var lineSeries = chart.series.push(new am4maps.MapLineSeries());
	lineSeries.dataFields.multiGeoLine = "multiGeoLine";

	var lineTemplate = lineSeries.mapLines.template;
	lineTemplate.nonScalingStroke = true;
	lineTemplate.arrow.nonScaling = true;
	lineTemplate.arrow.width = 4;
	lineTemplate.arrow.height = 6;
	lineTemplate.stroke = interfaceColors.getFor("alternativeBackground");
	lineTemplate.fill = interfaceColors.getFor("alternativeBackground");
	lineTemplate.line.strokeOpacity = 0.4;

	lineSeries.data = [{
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 50.4422, "longitude": 30.5367 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 40.4300, "longitude": -74.0000 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 64.1353, "longitude": -21.8952 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 37.9792, "longitude": 23.7166 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 38.7072, "longitude": -9.1355 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 55.7558, "longitude": 37.6176 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 44.8048, "longitude": 20.4781 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 48.2116, "longitude": 17.1547 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 46.0514, "longitude": 14.5060 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 40.4167, "longitude": -3.7033 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 59.3328, "longitude": 18.0645 }
		]
	  ]
	}, {
	  "multiGeoLine": [
		[
		  { "latitude": 51.5002, "longitude": -0.1262 },
		  { "latitude": 46.9480, "longitude": 7.4481 }
		]
	  ]
	}];

	}); // end am4core.ready()
	
	
	    
	
	
}); // End of use strict
