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
                x: 250, // Use the numeric index for "Feb"
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
                    points: [], // Empty array to hide annotations on smaller screens
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
        height: 153,
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
        height: 153,
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
    colors: [secondary_color, "#faded1"],
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

export const sellingchart: ChartOptions | any = [

]
