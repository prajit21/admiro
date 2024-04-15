import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexLegend,
    ApexResponsive,
    ApexStroke,
    ApexXAxis,
    ApexYAxis,
    ApexFill,
    ApexDataLabels,
    ApexAxisChartSeries,
    ApexMarkers,
    ApexTheme,
    ApexTitleSubtitle,
    ApexAnnotations,
    ApexGrid
} from "ng-apexcharts";


export type ChartOptions = {
    series?: ApexAxisChartSeries;
    chart?: ApexChart;
    xaxis?: ApexXAxis;
    stroke?: ApexStroke;
    tooltip?: string[] | boolean;
    dataLabels?: ApexDataLabels;
    yaxis?: ApexYAxis;
    legend?: ApexLegend;
    labels?: string[];
    shared?: boolean;
    plotOptions?: ApexPlotOptions;
    fill?: ApexFill;
    responsive?: ApexResponsive[];
    pieseries?: ApexNonAxisChartSeries;
    title?: ApexTitleSubtitle;
    theme?: ApexTheme;
    colors?: string[];
    markers?: ApexMarkers;
    annotations?: ApexAnnotations;
    grid?: ApexGrid;
    formatter?: Function;
}

let primary_color = localStorage.getItem('primary_color') || '#308e87';
let secondary_color = localStorage.getItem('secondary_color') || '#f39159';

export const DataChart: ChartOptions | any = {
    series: [
        {
          name: "Desktops",
          data: [210, 180, 650, 200, 600, 100, 800, 300, 500],
        },
      ],
      chart: {
        width: 200,
        height: 150,
        type: "line",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color:secondary_color,
          opacity: 0.3,
        },
        zoom: {
          enabled: false,
        },
      },
      colors: [secondary_color],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      grid: {
        show: false,
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          show: false,
        },
        z: {
          show: false,
        },
        marker: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 1780,
          options: {
            chart: {
              width: 180,
            },
          },
        },
        {
          breakpoint: 1680,
          options: {
            chart: {
              width: 160,
            },
          },
        },
        {
          breakpoint: 1601,
          options: {
            chart: {
              height: 110,
            },
          },
        },
        {
          breakpoint: 1560,
          options: {
            chart: {
              width: 140,
            },
          },
        },
        {
          breakpoint: 1460,
          options: {
            chart: {
              width: 120,
            },
          },
        },
        {
          breakpoint: 1400,
          options: {
            chart: {
              width: 150,
            },
          },
        },
        {
          breakpoint: 1110,
          options: {
            chart: {
              width: 200,
            },
          },
        },
        {
          breakpoint: 700,
          options: {
            chart: {
              width: 150,
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              width: 220,
            },
          },
        },
        {
          breakpoint: 420,
          options: {
            chart: {
              width: 150,
            },
          },
        },
      ],
};

export const OrderDatachart: ChartOptions | any = {
    series: [{
        name: 'Daily',
        data: [2.15, 3, 1.5, 2, 2.4, 3, 2.4,
            2.8, 1.5, 1.7, 3, 2.50, 3, 2, 2.15, 3, 1.10
        ]
    },
    {
        name: 'Weekly',
        data: [-2.15, -3, -1.5, -2, -2.4, -3, -2.4,
        -2.8, -1.5, -1.7, -3, -2.50, -3, -2, -2.15, -3, -1.10
        ]
    },
    {
        name: 'Monthly',
        data: [-2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85,
        -2.95, -3.00, -3.10, -3.20, -3.25, -3.10, -3.00, -2.95, -2.85, -2.75
        ]
    },
    {
        name: 'Yearly',
        data: [2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85,
            2.95, 3.00, 3.10, 3.20, 3.25, 3.10, 3.00, 2.95, 2.85, 2.75
        ]
    }
    ],
    chart: {
        type: 'bar',
        width: 180,
        height: 120,
        stacked: true,
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        bar: {
            vertical: true,
            columnWidth: '40%',
            barHeight: '80%',
            startingShape: 'rounded',
            endingShape: 'rounded'
        },
    },
    colors: [primary_color, primary_color, "#F2F3F7", "#F2F3F7"],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0,
    },
    legend: {
        show: false,
    },
    grid: {
        xaxis: {
            offsetX: -2,
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    yaxis: {
        min: -5,
        max: 5,
        show: false,
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
    },
    tooltip: {
        shared: false,
        x: {
            show: false,
        },
        y: {
            show: false,
        },
        z: {
            show: false,
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ],
        offsetX: 0,
        offsetY: 0,
        labels: {
            offsetX: 0,
            offsetY: 0,
            show: false
        },
        axisBorder: {
            offsetX: 0,
            offsetY: 0,
            show: false
        },
        axisTicks: {
            offsetX: 0,
            offsetY: 0,
            show: false
        }
    },
    responsive: [{
        breakpoint: 1760,
        options: {
            chart: {
                width: 160,
            }
        },
    },
    {
        breakpoint: 1601,
        options: {
            chart: {
                height: 110,
            }
        },
    },
    {
        breakpoint: 1560,
        options: {
            chart: {
                width: 140,
            }
        },
    },
    {
        breakpoint: 1460,
        options: {
            chart: {
                width: 120,
            }
        },
    },
    {
        breakpoint: 1400,
        options: {
            chart: {
                width: 150,
            }
        },
    },
    {
        breakpoint: 1110,
        options: {
            chart: {
                width: 200,
            }
        },
    },
    {
        breakpoint: 700,
        options: {
            chart: {
                width: 150,
            }
        },
    },
    {
        breakpoint: 576,
        options: {
            chart: {
                width: 220,
            }
        },
    },
    {
        breakpoint: 420,
        options: {
            chart: {
                width: 150,
            }
        },
    },
    ],

}