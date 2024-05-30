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

export const educationchart1: ChartOptions | any = {
    series: [
        {
            data: [
                [1351202400000, 37.3],
                [1351338000000, 36.6],
                [1351424400000, 39.5],
                [1351710800000, 32.55],
                [1351870000000, 32.55],
                [1352056400000, 35.6],
                [1352342800000, 33.45],
                [1352629200000, 39.6],
                [1352815600000, 37.5],
                [1352924000000, 38.3],
                [1353061200000, 36.2],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353479600000, 33.3],
                [1353566000000, 34.23],
                [1353632400000, 32.3],
                [1353757200000, 34.23],
                [1353857200000, 36.3],
                [1353957200000, 38.28],
                [1354021500000, 37.1],
                [1354175600000, 39.28],
                [1354362000000, 36.22],
                [1354548400000, 36.22],
                [1354634800000, 38.55],
                [1354794000000, 36.22],
                [1354980400000, 40.5],
                [1355166800000, 40.8],
                [1355253200000, 39.5],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355885200000, 33.4],
                [1355985200000, 36.4],
                [1356085200000, 39.4],
            ],
        },
    ],
    annotations: {
        points: [
            {
                x: new Date("03 Dec 2012").getTime(),
                y: 36.22,
                marker: {
                    size: 8,
                    fillColor: primary_color,
                    strokeColor: "#fff",
                    strokeWidth: 5,
                    radius: 5,
                },
            },
        ],
    },
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "square",
        colors: undefined,
        width: 3,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
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
    grid: {
        show: false,
        padding: {
            top: -20,
            right: 0,
            bottom: -8,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: [primary_color],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100],
        },
    },
    id: 1,
    img: 'assets/images/dashboard-3/user/20.png',
    title: 'Graphic Design',
    name: 'Alice Goodwin',
    lessons: 10,
    hours: 8,
    students: 16,
    rating: '3.6'
}

export const educationchart2: ChartOptions | any = {
    series: [
        {
            data: [
                [1351202400000, 37.3],
                [1351338000000, 38.6],
                [1351424400000, 39.5],
                [1351710800000, 37.55],
                [1351870000000, 39.55],
                [1352056400000, 37.6],
                [1352342800000, 39.45],
                [1352629200000, 39.6],
                [1352815600000, 37.5],
                [1352924000000, 38.3],
                [1353061200000, 36.2],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353479600000, 36.3],
                [1353566000000, 35.23],
                [1353632400000, 35.3],
                [1353757200000, 38.23],
                [1353857200000, 36.3],
                [1353957200000, 38.28],
                [1354021500000, 37.1],
                [1354175600000, 39.28],
                [1354362000000, 36.22],
                [1354548400000, 36.22],
                [1354634800000, 38.55],
                [1354794000000, 36.22],
                [1354980400000, 40.5],
                [1355166800000, 40.8],
                [1355253200000, 39.5],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355885200000, 33.4],
                [1355985200000, 36.4],
                [1356085200000, 39.4],
            ],
        },
    ],
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    annotations: {
        points: [
            {
                x: new Date("22 Nov 2012").getTime(),
                y: 35.23,
                marker: {
                    size: 8,
                    fillColor: secondary_color,
                    strokeColor: "#fff",
                    strokeWidth: 5,
                    radius: 5,
                },
            },
        ],
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
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
    tooltip: {
        enabled: false,
    },
    grid: {
        show: false,
        padding: {
            top: -20,
            right: 0,
            bottom: -20,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: [secondary_color],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100],
        },
    },
    id: 2,
    img: 'assets/images/dashboard-3/user/21.png',
    title: 'Design Thinking',
    name: 'Alice Goodwin',
    lessons: 112,
    hours: 6,
    students: 20,
    rating: '5.8'
}

export const educationchart3: ChartOptions | any = {
    series: [
        {
            data: [
                [1351202400000, 37.3],
                [1351338000000, 36.6],
                [1351424400000, 39.5],
                [1351710800000, 32.55],
                [1351870000000, 32.55],
                [1352056400000, 35.6],
                [1352342800000, 30.45],
                [1352629200000, 39.6],
                [1352815600000, 37.5],
                [1352924000000, 38.3],
                [1353061200000, 36.2],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353479600000, 33.3],
                [1353566000000, 34.23],
                [1353632400000, 32.3],
                [1353757200000, 34.23],
                [1353857200000, 36.3],
                [1353957200000, 38.28],
                [1354021500000, 37.1],
                [1354175600000, 39.28],
                [1354362000000, 36.22],
                [1354548400000, 36.22],
                [1354634800000, 38.55],
                [1354794000000, 36.22],
                [1354980400000, 40.5],
                [1355166800000, 40.8],
                [1355253200000, 39.5],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355885200000, 33.4],
                [1355985200000, 36.4],
                [1356085200000, 39.4],
            ],
        },
    ],
    annotations: {
        points: [
            {
                x: new Date("29 Nov 2012").getTime(),
                y: 39.28,
                marker: {
                    size: 8,
                    fillColor: "#E6B54D",
                    strokeColor: "#fff",
                    strokeWidth: 5,
                    radius: 5,
                },
            },
        ],
    },
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
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
    grid: {
        show: false,
        padding: {
            top: -20,
            right: 0,
            bottom: -10,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: ["#E6B54D"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100],
        },
    },
    id: 3,
    img: 'assets/images/dashboard-3/user/22.png',
    title: 'Graphic Design',
    name: 'Alice Goodwin',
    lessons: 18,
    hours: 9,
    students: 10,
    rating: '9.5'
}

export const SchoolPerformance: ChartOptions | any = {
    series: [
        {
            name: "Good",
            data: [380, 600, 500, 800, 650, 480, 520, 380, 620, 400, 380, 550],
        },
        {
            name: "Very Good",
            data: [690, 500, 600, 600, 500, 650, 800, 400, 400, 550, 450, 500],
        },
    ],
    colors: [primary_color, secondary_color],
    chart: {
        type: "bar",
        height: 325,
        offsetX: 0,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40%",
        },
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    grid: {
        show: true,
        borderColor: "#E5E5E5",
        position: "back",
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: true,
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                colors: "#AAA3A0",
            },
            formatter: (value: string) => {
                return `${value}k`;
            },
        },
    },
    xaxis: {
        show: true,
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
        ],
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                colors: "#AAA3A0",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1600,
            options: {
                chart: {
                    height: 360,
                },
                series: [
                    {
                        name: "Good",
                        data: [170, 250, 350, 150, 230, 120, 330, 350, 280],
                    },
                    {
                        name: "Very Good",
                        data: [290, 180, 120, 290, 370, 250, 230, 200, 140],
                    },
                ],
            },
        },
        {
            breakpoint: 531,
            options: {
                chart: {
                    height: 200,
                },
                series: [
                    {
                        name: "Good",
                        data: [170, 250, 350, 150, 230, 120, 330],
                    },
                    {
                        name: "Very Good",
                        data: [290, 180, 120, 290, 370, 250, 230],
                    },
                ],
            },
        },
    ],
}

export const Learningchart: ChartOptions | any = {
    labels: ["Reading", "Writing", "Video", "Assignments"],
    series: [80, 50, 30, 60],
    chart: {
        type: "donut",
        height: 380,
    },
    legend: {
        show: true,
        position: "bottom",
    },
    dataLabels: {
        enabled: false,
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    stroke: {
        width: 0,
    },
    colors: [primary_color,
        secondary_color,
        "#E6B54D",
        "#E74B2B"
    ],
}