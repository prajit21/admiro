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
  ApexGrid,

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

export const SalesAnalytics: ChartOptions | any = {
  series: [
      {
          name: "series1",
          data: [2.8, 4.2, 2.9, 3, 4, 4.8, 3.3, 4, 4, 3.6],
      },
      {
          name: "series2",
          data: [2, 6, 5, 4.3, 2, 1.8, 2.2, 3, 3, 2.6],
      },
  ],
  chart: {
      height: 270,
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  colors: [secondary_color, primary_color],
  stroke: {
      curve: "smooth",
      width: 5,
  },
  grid: {
      show: true,
      borderColor: "#E5E5E5",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
          lines: {
              show: false,
          },
      },
  },
  yaxis: {
      labels: {
          show: true,
          style: {
              fontWeight: 500,
              fontSize: '14px',
              colors: "#AAA3A0",
          },
          formatter: (value: number) => {
              return `$ ${value}000`;
          },
      },
  },
  xaxis: {
      type: "category",
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
          "Oct",
      ],
      tickAmount: 18,
      labels: {
          minHeight: undefined,
          maxHeight: 28,
          offsetX: 10,
          offsetY: 0,
          style: {
              fontWeight: 500,
              fontSize: '14px',
              colors: "#AAA3A0",
          },
          tooltip: {
              enabled: false,
          },
      },
      axisBorder: {
          show: false,
      },
  },
  legend: {
      show: false,
  },
  responsive: [
      {
          breakpoint: 361,
          options: {
              chart: {
                  height: 190,
              },
          },
      },
  ],
}

export const overviewChart: ChartOptions | any = {
  series: [
      {
          name: "Earning",
          type: "area",
          data: [50, 60, 55, 45, 40, 45, 50, 48, 55, 40, 45, 40, 48, 50, 48, 40],
      },
  ],
  annotations: {
      points: [
          {
              x: 250,
              y: 45,
              marker: {
                  size: 10,
                  fillColor: "#fff",
                  strokeColor: primary_color,
                  strokeWidth: 5,
                  radius: 5,
              },
          },
      ],
  },
  chart: {
      height: 345,
      type: "area",
      toolbar: {
          show: false,
      },
  },
  stroke: {
      width: [4, 3],
      curve: "smooth",
  },
  grid: {
      show: false,
      yaxis: {
          lines: {
              show: false,
          },
      },
  },
  plotOptions: {
      bar: {
          columnWidth: "50%",
      },
  },
  dataLabels: {
      enabled: false,
  },
  colors: [primary_color],
  fill: {
      type: "gradient",
      gradient: {
          shade: "light",
          type: "vertical",
          opacityFrom: 0.9,
          opacityTo: 0,
          stops: [0, 100],
      },
  },
  xaxis: {
      tickAmount: undefined,
      tickPlacement: "String",
      offsetX: 0,
      offsetY: 0,
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
          "Oct",
          "Nov",
          "Dec",
          "",
          "",
          "",
          "",
      ],
      labels: {
          low: 0,
          offsetX: 0,
          show: false,
      },
      axisBorder: {
          low: 0,
          offsetX: 0,
          show: false,
      },
      axisTicks: {
          show: false,
      },
  },
  legend: {
      show: false,
  },
  yaxis: {
      min: 0,
      tickAmount: 6,
      tickPlacement: "between",
      show: false,
  },
  tooltip: {
      x: {
          format: "MM",
      },
  },
  responsive: [
      {
          breakpoint: 1875,
          options: {
              annotations: {
                  points: [],
              },
          },
      },
      {
          breakpoint: 1400,
          options: {
              chart: {
                  height: 365,
              },
          },
      },
      {
          breakpoint: 1200,
          options: {
              chart: {
                  height: 350,
              },
          },
      },
      {
          breakpoint: 768,
          options: {
              chart: {
                  height: 370,
              },
          },
      },
      {
          breakpoint: 576,
          options: {
              chart: {
                  height: 250,
              },
          },
      },
  ],
}

export const orderBarchart: ChartOptions | any = {
  series: [
      {
          name: "Revenue",
          data: [
              60, 70, 48, 55, 48, 40, 50, 65, 52, 70, 60, 68, 50, 65, 41, 58, 70, 41,
              58, 70, 41, 58, 70, 41, 58, 70,
          ],
      },
  ],
  chart: {
      type: "bar",
      height: 250,
      toolbar: {
          show: false,
      },
  },
  plotOptions: {
      bar: {
          horizontal: false,
          columnWidth: "60%",
      },
  },
  colors: ["#308e8733"],
  grid: {
      show: false,
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
  },
  xaxis: {
      categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
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
  fill: {
      opacity: 0.2,
  },
  tooltip: {
      enabled: false,
  },
  states: {
      normal: {
          filter: {
              type: "none",
          },
      },
      hover: {
          filter: {
              type: "none",
          },
      },
      active: {
          allowMultipleDataPointsSelection: false,
          filter: {
              type: "none",
          },
      },
  },
}

export const salesvaluechart: ChartOptions | any = {

  series: [
      {
          name: "Statistics",
          data: [20, 60, 50, 70, 40, 80, 5],
      },
      {
          name: "Statistics",
          data: [80, 40, 50, 30, 60, 20, 10],
      },
  ],
  chart: {
      type: "bar",
      height: 140,
      stacked: true,
      stackType: "100%",
      toolbar: {
          show: false,
      },
  },
  plotOptions: {
      bar: {
          horizontal: false,
          columnWidth: "40px",
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
              type: "darken",
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
  colors: [primary_color, "#D5E8E6"],
  xaxis: {
      show: false,
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
          position: "bottomRight",
          offsetX: 0,
          offsetY: 0,
      },
  },
  responsive: [
      {
          breakpoint: 1661,
          options: {
              chart: {
                  width: 135,
                  offsetX: -30,
              },
          },
      },
      {
          breakpoint: 1451,
          options: {
              chart: {
                  width: 130,
              },
          },
      },
      {
          breakpoint: 1400,
          options: {
              chart: {
                  width: 150,
                  height: 140,
              },
          },
      },
      {
          breakpoint: 576,
          options: {
              chart: {
                  width: 150,
                  height: 130,
              },
          },
      },
  ],
  badge: '80%',
  class: 'primary',
  price: 376793,
  des: 'Our Sale Value'
}

export const visitorchart: ChartOptions | any = {
    series: [
        {
          name: "Statistics",
          data: [20, 60, 50, 70, 40, 80, 5],
        },
        {
          name: "Statistics",
          data: [80, 40, 50, 30, 60, 20, 10],
        },
      ],
      chart: {
        type: "bar",
        height: 140,
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40px",
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
            type: "darken",
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
      colors: ["#f39159", "#faded1"],
      xaxis: {
        show: false,
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
          position: "bottomRight",
          offsetX: 0,
          offsetY: 0,
        },
      },
      responsive: [
        {
          breakpoint: 1601,
          options: {
            chart: {
              width: 150,
              offsetX: -30,
            },
          },
        },
        {
          breakpoint: 1451,
          options: {
            chart: {
              width: 130,
            },
          },
        },
        {
          breakpoint: 1400,
          options: {
            chart: {
              width: 150,
              height: 140,
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              width: 150,
              height: 130,
            },
          },
        },
      ],
  badge: '60%',
  class: 'secondary',
  price: 426876,
  des: 'Today Stock Value'
}

export const sellingchart: ChartOptions | any =
{
  series: [70],
  chart: {
      height: 350,
      type: "radialBar",
      offsetY: 0,
  },
  stroke: {
      dashArray: 20,
      curve: "smooth",
      lineCap: "round",
  },
  grid: {
      padding: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
      },
  },
  plotOptions: {
      radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
              size: "75%",
              image: "assets/images/apexchart/radial-image.png",
              imageWidth: 210,
              imageHeight: 210,
              imageClipped: false,
          },
          track: {
              show: true,
              background: "var(--body-color)",
              strokeWidth: "97%",
              opacity: 0.4,
          },
          dataLabels: {
              show: true,
              name: {
                  show: true,
                  fontSize: "20px",
                  fontFamily: undefined,
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10,
              },
              value: {
                  show: true,
                  fontFamily: '"Nunito Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#292929",
                  offsetY: 6,
                  formatter: function (val: string) {
                      return val + "%";
                  },
              },
          },
      },
  },
  labels: ["Selling rate", "Returning: 3.2k"],
  colors: [primary_color, secondary_color],
  legend: {
      show: false,
  },
  responsive: [
      {
          breakpoint: 1580,
          options: {
              chart: {
                  height: 340,
              },
              plotOptions: {
                  radialBar: {
                      hollow: {
                          size: "75%",
                          imageWidth: 150,
                          imageHeight: 150,
                      },
                      dataLabels: {
                          name: {
                              fontSize: "14px",
                              offsetY: -8,
                          },
                          value: {
                              fontSize: "18px",
                          },
                      },
                  },
              },
          },
      },
      {
          breakpoint: 1535,
          options: {
              plotOptions: {
                  radialBar: {
                      hollow: {
                          size: "68%",
                      },
                  },
              },
          },
      },
      {
          breakpoint: 1501,
          options: {
              chart: {
                  height: 350,
              },
              plotOptions: {
                  radialBar: {
                      hollow: {
                          size: "75%",
                      },
                  },
              },
          },
      },
      {
          breakpoint: 1321,
          options: {
              chart: {
                  height: 300,
              },
          },
      },
  ],

}

export const sildesOptions = {
  loop: true,
  margin: 10,
  nav: true,
  navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
  dots: false,
  responsive: {
      3000: {
          items: 1
      },
      0: {
          items: 1
      }
  }
}

export const productoffer = [
  {
      img: 'assets/images/dashboard-2/1.png',
      class: 'primary',
      offer: 'Special Offer',
      title: 'Smart Design Watch Multi Color',
      discountPrice: 26,
      price: 30
  },
  {
      img: 'assets/images/dashboard-2/5.png',
      class: 'secondary',
      offer: 'HeadPhone 3rd Generation',
      title: 'Smart Design Watch Multi Color',
      discountPrice: 36,
      price: 70
  },
]

export const sildesOptions2 = {
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
  responsive: {
      3000: {
          items: 1
      },
      0: {
          items: 1
      }
  }
}

export const productoffer2 = [
  {
      img: 'assets/images/dashboard-2/2.png',
      class: 'secondary',
      offer: 'Weekend Sale',
      title: 'AirPods 3rd Generation Silicone Skin',
      discountPrice: 16,
      price: 30
  },
  {
      img: 'assets/images/dashboard-2/6.png',
      class: 'primary',
      offer: 'HeadPhone 3rd Generation',
      title: 'Smart Design Watch Multi Color',
      discountPrice: 86,
      price: 60
  },
]