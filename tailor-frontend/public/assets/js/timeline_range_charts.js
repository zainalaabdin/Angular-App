// Basic Timeline Chart//

var options = {
  series: [
    {
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    fontFamily: 'Montserrat, system-ui',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      rotate: -30,
      rotateAlways: true,
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  colors: [getLocalStorageItem('color-primary','#8973ea')],
  responsive: [{
  breakpoint: 768,
  options: {
    chart: {
      height: 280,
    },

  },
}],
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

var chart = new ApexCharts(document.querySelector("#timeline1"), options);
chart.render();



// Different color for each bar chart //

var options = {
  series: [
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime()
          ],
          fillColor: getLocalStorageItem('color-secondary','#626263')
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ],
          fillColor: '#147534'
        },
        {
          x: 'Coding',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime()
          ],
          fillColor: '#e90bc4'
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ],
          fillColor: '#eaea4f'
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime()
          ],
          fillColor: '#2e5ce2'
        }
      ]
    }
  ],
  chart: {
    fontFamily: 'Montserrat, system-ui',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      var label = opts.w.globals.labels[opts.dataPointIndex]
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
    },
    style: {
      colors: ['#f3f4f5', '#fff']
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      rotate: -30,
      rotateAlways: true,
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },

  },
  yaxis: {
    show: false,
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  grid: {
    row: {
      opacity: 1
    }
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
    },
  }],
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

var chart = new ApexCharts(document.querySelector("#timeline2"), options);
chart.render();



// Multi-series Timeline //

var options = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime()
          ]
        }
      ]
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-09').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-19').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    fontFamily: 'Montserrat, system-ui',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return diff + (diff > 1 ? ' days' : ' day')
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },

  colors: ['#282632', getLocalStorageItem('color-primary','#8973ea')],
  xaxis: {
    type: 'datetime',
    labels: {
      rotate: -30,
      rotateAlways: true,
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  legend: {
    position: 'top'
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
    },
  }],

  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

var chart = new ApexCharts(document.querySelector("#timeline3"), options);
chart.render();



// Advanced Timeline (Multiple range) //

var options = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-09').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime()
          ]
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-03').getTime()
          ],
        }
      ]
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-16').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-10').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-22').getTime()
          ]
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime()
          ]
        }
      ]
    },
    {
      name: 'Dan',
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-07').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
      ]
    }
  ],
  chart: {
    fontFamily: 'Montserrat, system-ui',
    height: 450,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%'
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  xaxis: {
    type: 'datetime',
    labels: {
      rotate: -30,
      rotateAlways: true,
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  colors: ['#282632', getLocalStorageItem('color-primary','#8973ea')],
  stroke: {
    width: 1
  },
  fill: {
    type: 'solid',
    opacity: 0.6
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

var chart = new ApexCharts(document.querySelector("#timeline4"), options);
chart.render();



// Timeline_range_chart 5
var options = {
  series: [
    // George Washington
    {
      name: 'George Washington',
      data: [
        {
          x: 'President',
          y: [
            new Date(1789, 3, 30).getTime(),
            new Date(1797, 2, 4).getTime()
          ]
        },
      ]
    },
    // John Adams
    {
      name: 'John Adams',
      data: [
        {
          x: 'President',
          y: [
            new Date(1797, 2, 4).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'Vice President',
          y: [
            new Date(1789, 3, 21).getTime(),
            new Date(1797, 2, 4).getTime()
          ]
        }
      ]
    },
    // Thomas Jefferson
    {
      name: 'Thomas Jefferson',
      data: [
        {
          x: 'President',
          y: [
            new Date(1801, 2, 4).getTime(),
            new Date(1809, 2, 4).getTime()
          ]
        },
        {
          x: 'Vice President',
          y: [
            new Date(1797, 2, 4).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'Secretary of State',
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime()
          ]
        }
      ]
    },
    // Aaron Burr
    {
      name: 'Aaron Burr',
      data: [
        {
          x: 'Vice President',
          y: [
            new Date(1801, 2, 4).getTime(),
            new Date(1805, 2, 4).getTime()
          ]
        }
      ]
    },
    // George Clinton
    {
      name: 'George Clinton',
      data: [
        {
          x: 'Vice President',
          y: [
            new Date(1805, 2, 4).getTime(),
            new Date(1812, 3, 20).getTime()
          ]
        }
      ]
    },
    // John Jay
    {
      name: 'John Jay',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1789, 8, 25).getTime(),
            new Date(1790, 2, 22).getTime()
          ]
        }
      ]
    },
    // Edmund Randolph
    {
      name: 'Edmund Randolph',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1794, 0, 2).getTime(),
            new Date(1795, 7, 20).getTime()
          ]
        }
      ]
    },
    // Timothy Pickering
    {
      name: 'Timothy Pickering',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1795, 7, 20).getTime(),
            new Date(1800, 4, 12).getTime()
          ]
        }
      ]
    },
    // Charles Lee
    {
      name: 'Charles Lee',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1800, 4, 13).getTime(),
            new Date(1800, 5, 5).getTime()
          ]
        }
      ]
    },
    // John Marshall
    {
      name: 'John Marshall',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1800, 5, 13).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        }
      ]
    },
    // Levi Lincoln
    {
      name: 'Levi Lincoln',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1801, 2, 5).getTime(),
            new Date(1801, 4, 1).getTime()
          ]
        }
      ]
    },
    // James Madison
    {
      name: 'James Madison',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1801, 4, 2).getTime(),
            new Date(1809, 2, 3).getTime()
          ]
        }
      ]
    },
  ],
  chart: {
    fontFamily: 'Montserrat, system-ui',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
      rangeBarGroupRows: true
    }
  },
  colors: [
    "#8973ea", "#147534", "#eaea4f", "#2e5ce2", "#282632",
    "#8973ea", "#626263", "#e90bc4", "#eaea4f", "#2e5ce2",
  ],
  fill: {
    type: 'solid'
  },
  xaxis: {
    type: 'datetime',
      labels: {
        rotate: -30,
        rotateAlways: true,
        style: {
          colors: [],
          fontSize: '14px',
          fontWeight: 500,
        },
      },
  },
  yaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  legend: {
    position: 'right'
  },
  tooltip: {
    custom: function(opts) {
      const fromYear = new Date(opts.y1).getFullYear()
      const toYear = new Date(opts.y2).getFullYear()

      const w = opts.ctx.w
      let ylabel = w.globals.labels[opts.dataPointIndex]
      let seriesName = w.config.series[opts.seriesIndex].name
          ? w.config.series[opts.seriesIndex].name
          : ''
      const color = w.globals.colors[opts.seriesIndex]

      return (
          '<div class="apexcharts-tooltip-rangebar">' +
          '<div> <span class="series-name" style="color: ' +
          color +
          '">' +
          (seriesName ? seriesName : '') +
          '</span></div>' +
          '<div> <span class="category">' +
          ylabel +
          ' </span> <span class="value start-value">' +
          fromYear +
          '</span> <span class="separator">-</span> <span class="value end-value">' +
          toYear +
          '</span></div>' +
          '</div>'
      )
    }
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

var chart = new ApexCharts(document.querySelector("#timeline5"), options);
chart.render();