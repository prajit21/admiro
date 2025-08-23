import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexGrid,
  ApexStates,
  ApexDataLabels,
  ApexLegend,
  ApexXAxis,
  ApexYAxis,
  ApexTooltip,
  ApexResponsive,
  ApexStroke,
} from 'ng-apexcharts';

let primary_color = localStorage.getItem('primary_color') || '#308e87';
let secondary_color = localStorage.getItem('secondary_color') || '#f39159';

export interface SaleValueChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  states: ApexStates;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}

export const saleValue: SaleValueChartOptions = {
  series: [
    {
      name: 'Statistics',
      data: [80, 40, 50, 30, 60, 20, 10],
    },
    {
      name: 'Statistics',
      data: [20, 60, 50, 70, 40, 80, 5],
    },
  ],
  chart: {
    type: 'bar',
    height: 110,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '70%',
      borderRadius: 2,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ['#D5E8E6', primary_color],
  xaxis: {
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
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: 'bottomRight',
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          width: 130,
          height: 110,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 110,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 110,
          width: 90,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: 150,
          height: 120,
        },
      },
    },
    {
      breakpoint: 670,
      options: {
        chart: {
          width: 130,
        },
      },
    },
  ],
};

export interface StockValueChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  states: ApexStates;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
}
export const stockValue: StockValueChartOptions = {
  series: [
    {
      name: 'Statistics',
      data: [80, 40, 50, 30, 60, 20, 10],
    },
    {
      name: 'Statistics',
      data: [20, 60, 50, 70, 40, 80, 5],
    },
  ],
  chart: {
    type: 'bar',
    height: 120,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      borderRadius: 0,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  states: {
    hover: {
      filter: {
        type: 'darken',
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ['#faded1', secondary_color],
  xaxis: {
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
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: 'bottomRight',
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          width: 130,
          height: 100,
        },
      },
    },
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 110,
        },
      },
    },
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 110,
          width: 90,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 670,
      options: {
        chart: {
          width: 130,
        },
      },
    },
  ],
};

export interface InvestmentChartOptions {
  series: number[];
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  labels: string[];
  legend: ApexLegend;
  responsive: ApexResponsive[];
}

export const InvestmentChart: InvestmentChartOptions = {
  series: [76, 67, 61, 90],
  chart: {
    height: 300,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (_w: number) {
            return '249';
          },
        },
      },
      track: {
        background: 'var(--body-color)',
      },
    },
  },

  colors: [primary_color, secondary_color, '#ea9200', '#e74b2b'],
  labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  legend: {
    labels: {
      useSeriesColors: true,
    },
    formatter: function (seriesName: string, opts) {
      return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
    },
    itemMargin: {
      vertical: 2,
    },
  },
  responsive: [
    {
      breakpoint: 1650,

      options: {
        chart: {
          height: 280,
        },
      },
    },
    {
      breakpoint: 1445,

      options: {
        chart: {
          offsetX: -10,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 2,
              size: '20%',
            },
            dataLabels: {
              total: {
                show: false,
              },
            },
          },
        },
      },
    },
    {
      breakpoint: 1435,

      options: {
        chart: {
          offsetX: 10,
        },
      },
    },
    {
      breakpoint: 1430,

      options: {
        chart: {
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 1400,

      options: {
        chart: {
          height: 250,
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 1300,

      options: {
        chart: {
          height: 230,
        },
      },
    },
    {
      breakpoint: 1240,

      options: {
        chart: {
          height: 235,
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 300,
          offsetX: -10,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 5,
              size: '30%',
            },
            dataLabels: {
              total: {
                show: true,
              },
            },
          },
        },
      },
    },
  ],
};

export interface DataChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  responsive: ApexResponsive[];
}
export const DataChart: DataChartOptions = {
  series: [
    {
      name: 'Desktops',
      data: [210, 180, 650, 200, 600, 100, 800, 300, 500],
    },
  ],
  chart: {
    width: 200,
    height: 150,
    type: 'line',
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 3,
      color: secondary_color,
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
    curve: 'smooth',
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    y: {},
    z: {},
    marker: {
      show: false,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
          height: 160,
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

export interface OrderDataChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  colors: string[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
}
export const OrderDatachart: OrderDataChartOptions = {
  series: [
    {
      name: 'Daily',
      data: [2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3, 1.1],
    },
    {
      name: 'Weekly',
      data: [
        -2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3, -2, -2.15, -3, -1.1,
      ],
    },
    {
      name: 'Monthly',
      data: [
        -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1, -3.2, -3.25, -3.1, -3.0,
        -2.95, -2.85, -2.75,
      ],
    },
    {
      name: 'Yearly',
      data: [
        2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25, 3.1, 3.0, 2.95, 2.85,
        2.75,
      ],
    },
  ],
  chart: {
    type: 'bar',
    width: 180,
    height: 135,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
      barHeight: '80%',
    },
  },
  colors: [primary_color, primary_color, '#F2F3F7', '#F2F3F7'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  legend: {
    show: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    show: false,
    axisBorder: {
      show: false,
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
    y: {},
    z: {},
  },
  xaxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1760,
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
          height: 150,
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
