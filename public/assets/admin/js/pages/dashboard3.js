//[Dashboard Javascript]

//Project:	Riday Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';

		var bar = new ProgressBar.Circle(progressbar1, {
		  color: '#e66430',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 8,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#e66430', width: 8 },
		  to: { color: '#e66430', width: 8 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<i class='icon-Dinner1'><span class='path1'></span><span class='path2'></span></i>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.78);
	
		var bar = new ProgressBar.Circle(progressbar2, {
		  color: '#e66430',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 8,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#e66430', width: 8 },
		  to: { color: '#e66430', width: 8 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<i class='icon-Dollar'><span class='path1'></span><span class='path2'></span><span class='path3'></span></i>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.5);
	
	
		var bar = new ProgressBar.Circle(progressbar3, {
		  color: '#e66430',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 8,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#e66430', width: 8 },
		  to: { color: '#e66430', width: 8 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<i class='icon-Clipboard'><span class='path1'></span><span class='path2'></span><span class='path3'></span><span class='path4'></span></i>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.4);
	
	
	
		var bar = new ProgressBar.Circle(progressbar4, {
		  color: '#e66430',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 8,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#e66430', width: 8 },
		  to: { color: '#e66430', width: 8 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<i class='icon-User'><span class='path1'></span><span class='path2'></span></i>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.3);
	
	
	var options = {
          series: [{
          name: 'Revenue',
          data: [91, 100, 90, 120, 155, 140, 170]
        }],
          chart: {
          height: 380,
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
          curve: 'stepline',
		  show: true,
		  width: 5,
        },
        xaxis: {
          categories: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "July"]
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
			  columnWidth: '40%',
			  distributed: true,
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
		  name: 'Customer',
		  data: [152, 385, 351, 428, 350, 550, 660]
	  },],
	  xaxis: {
		  categories: [["Mon"], ["Tue"], ["Wed"], ["Thu"], ["Fri"], ["Set"], ["Sun"],],
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
				  return val + "k"
			  }
		  }
	  }
	}

	var chart = new ApexCharts(
	  document.querySelector("#yearly-comparison"),
	  options
	);

	chart.render();
	
	
	var options = {
	  chart: {
		  height: 325,
		  type: 'area',
		  toolbar: {
			  show: false
		  },
	  },
	  plotOptions: {
		  bar: {
			  horizontal: false,
			  endingShape: 'rounded',
			  columnWidth: '40%',
		  },
	  },
	  dataLabels: {
		  enabled: false
	  },
	  stroke: {
		  show: true,
		  width: 5,
		  
	  },
	  colors: ["#4c95dd"],
	  series: [{	
		  name: 'Order',
		  data: [200, 445, 351, 258, 359, 558, 461]
	  },],
	  xaxis: {
		  categories: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
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
		  opacity: 1,
		  type: "gradient",
		  gradient: {
			  shadeIntensity: 1,
			  opacityFrom: 0.7,
			  opacityTo: 0.9,
			  stops: [0, 90, 100]
			},
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
				  return val + " total"
			  }
		  }
	  }
	}

	var chart = new ApexCharts(
	  document.querySelector("#order-overview"),
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
	
	
}); // End of use strict
