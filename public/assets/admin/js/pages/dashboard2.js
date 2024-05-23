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
          data: [31, 50, 28, 70, 45, 90, 140]
        }],
          chart: {
          height: 178,
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
	  colors: ["#ffb500", "#4c95dd"],
	  series: [{
		  name: 'Customer',
		  data: [20, 45, 51, 58, 59, 58, 61, 30, 35, 61, 48, 39, 68, 41, 41]
	  },],
	  xaxis: {
		  categories: ["1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
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
	  colors: ["#e66430"],
	  series: [{	
		  name: 'Order',
		  data: [200, 445, 351, 258, 359, 558, 461]
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
			margin: 0,
			responsiveClass: true,
			autoplay: true,
			dots: false,
			nav: false,
			responsive: {
			  0: {
				items: 1,
			  },
			  768: {
				items: 2,
			  },
			  1024: {
				items: 3,
			  },
			  1600: {
				items: 4,
			  },
			  2000: {
				items: 4,
			  }
			}
		  });
	
	
}); // End of use strict
