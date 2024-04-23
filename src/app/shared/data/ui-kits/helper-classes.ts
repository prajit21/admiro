
export interface titleData {
    mainTitle: string;
    item: item[]
}
export interface item {
    class: string;
    title: string;
    text?: string;
}

export const Customborder: titleData[] = [
    {
        mainTitle: 'Custom Border-radius Class',
        item: [
            {
                class: ' helper-box rounded-0 bg-light border',
                title: '.rounded-0'
            },
            {
                class: ' helper-box rounded-1 bg-light border',
                title: '..rounded-1'
            },
            {
                class: ' helper-box rounded-2 bg-light border',
                title: '..rounded-2'
            },
            {
                class: ' helper-box rounded-3 bg-light border',
                title: '..rounded-3'
            },
            {
                class: ' helper-box rounded-4 bg-light border',
                title: '..rounded-4'
            },
            {
                class: 'helper-box rounded-5 bg-light border',
                title: '..rounded-5'
            }
        ]
    },
]

export const colorBorders: titleData[] = [

    {

        mainTitle: 'Border color',

        item: [
            {
                class: 'helper-box border-primary border ',
                title: '.border-primary'
            },
            {
                class: 'helper-box border-secondary border',
                title: ' .border-secondary'
            },
            {
                class: ' helper-box border-success border',
                title: '.border-success'
            },
            {
                class: ' helper-box border-danger border',
                title: '.border-danger'
            },
            {
                class: ' helper-box border-warning border',
                title: '.border-warning'
            },
            {
                class: 'helper-box border-info border',
                title: '.border-info'
            },
            {
                class: 'helper-box border-dark border',
                title: '.border-dark'
            },
        ]
    },
]

export const borderWidth: titleData[] = [
    {
        mainTitle: 'borderwith',

        item: [
            {
                class: 'helper-box border-1 border',
                title: '.border-1'
            },
            {
                class: 'helper-box border-2 border',
                title: '.border-2'
            },
            {
                class: 'helper-box border-3 border',
                title: '.border-3'
            },
            {
                class: 'helper-box border-4 border',
                title: '.border-4'
            },
            {
                class: 'helper-box border-5 border',
                title: '.border-5'
            }
        ]
    }
]

export const TextColor = [
    {
        mainTitle: 'Text colors',
        item: [
            {
                text: 'A',
                class: 'helper-box helper-text border text-primary',
                title: '.text--primary'
            },
            {
                text: 'A',
                class: 'helper-box helper-text border  text-secondary',
                title: '.text-secondary'
            },
            {
                text: 'A',
                class: 'helper-box helper-text border  text-success',
                title: '.text-success'
            },
            {
                text: 'A',
                class: 'helper-box helper-text border  text-danger',
                title: '.text-danger'
            },
            {
                text: 'A',
                class: 'helper-box helper-text border  text-warning',
                title: '.text-warning'
            },
            {
                text: 'A',
                class: 'helper-box helper-text border  text-info',
                title: '.text-info'
            },
            {
                text: 'A',
                class: 'helper-box helper-text border  text-dark',
                title: '.text-dark'
            },
            {
                text: 'A',
                class: 'helper-box helper-text border  text-light bg-dark',
                title: '.text-light'
            },
        ]
    }
]
export const AdditiveBorderData: titleData[] = [
    {
        mainTitle: 'Additive border',
        item: [
            {
                class: 'helper-box bg-light border',
                title: '.border'
            },
            {
                class: 'helper-box bg-light border-top',
                title: '.border-top'
            },
            {
                class: 'helper-box bg-light border-bottom',
                title: '.border-bottom'
            },
            {
                class: 'helper-box bg-light border-start',
                title: '.border-start'
            }


        ]

    }
]
export const Subtractiveborder: titleData[] = [
    {
        mainTitle: 'Subtractive border',
        item: [

            {
                class: 'helper-box bg-light border border-0',
                title: '.border-0'
            },
            {
                class: 'helper-box bg-light border border-top-0',
                title: '.border-top'
            },
            {
                class: 'helper-box bg-light border border-end-0',
                title: '.border-end-0'
            },
            {
                class: 'helper-box bg-light border border-bottom-0',
                title: '.border-bottom-0'
            },
            {
                class: 'helper-box bg-light border border-start-0',
                title: '.border-start-0'
            },

        ]

    }
]
export const AdditiveRadius: titleData[] = [
    {
        mainTitle: 'Additive radius',

        item: [

            {
                class: 'helper-radius radius-wrapper rounded-3',
                title: '.rounded'
            },
            {
                class: 'helper-radius radius-wrapper rounded-top-3',
                title: '.rounded-top'
            },
            {
                class: 'helper-radius radius-wrapper rounded-end-3',
                title: '.rounded-end'
            },
            {
                class: 'helper-radius radius-wrapper rounded-botto-3',
                title: '.rounded-bottom'
            },
            {
                class: 'helper-radius radius-wrapper rounded-start',
                title: '.rounded-start'
            },
            {
                class: 'helper-radius radius-wrapper  rounded-pill',
                title: '.rounded-pill'
            },
            {
                class: 'helper-radius radius-wrapper rounded-circle',
                title: '.rounded-circle'
            }
        ]
    }
]

export const DarkBackground: titleData[] = [
    {
        mainTitle: 'Dark background',
        item: [
            {
                class: 'helper-box bg-primary',
                title: '.bg-primary'
            },
            {
                class: 'helper-box bg-secondary',
                title: '.bg-secondary'
            },
            {
                class: 'helper-box bg-success',
                title: '.bg-success'
            },
            {
                class: 'helper-box bg-danger',
                title: '.bg-danger'
            },
            {
                class: 'helper-box bg-warning',
                title: '.bg-warning'
            },
            {
                class: 'helper-box bg-info',
                title: '.bg-info'
            },
            {
                class: 'helper-box bg-dark',
                title: '.bg-dark'
            },
            {
                class: 'helper-box bg-light',
                title: '.bg-light'
            },
        ]

    }
];

export const Lightbackgrounds: titleData[] = [
    {
        mainTitle: 'Light backgrounds',
        item: [
            {
                class: 'helper-box alert-light-primary',
                title: '.alert-light-primary'
            },
            {
                class: 'helper-box alert-light-secondary',
                title: '.alert-light-secondary'
            },
            {
                class: 'helper-box alert-light-success',
                title: '.alert-light-success'
            },
            {
                class: 'helper-box alert-light-danger',
                title: '.alert-light-danger'
            },
            {
                class: 'helper-box alert-light-warning',
                title: '.alert-light-warning'
            },
            {
                class: 'helper-box alert-light-info',
                title: '.alert-light-info'
            },
            {
                class: 'helper-box alert-light-dark',
                title: '.alert-light-dark'
            },
            {
                class: 'helper-box alert-light-light',
                title: '.alert-light-light'
            },
        ]
    }
];
export const ExtendedBackground: titleData[] = [
    {
        mainTitle: 'Extended background colors',
        item: [
            {
                class: 'helper-box light-card',
                title: '.light-card'
            },
            {
                class: 'helper-box light-background border',
                title: '.light-backgroundy'
            },
        ]
    }
];
export const Bordercolors = [
    {
        class: 'b-primary',
        title: '.b-primary',
    },
    {
        class: 'b-t-primary',
        title: '.b-t-primary',
    },
    {
        class: 'b-b-primary',
        title: '.b-b-primary',
    },
    {
        class: 'b-l-primary',
        title: '.b-l-primary',
    },
    {
        class: 'b-r-primary',
        title: 'b-r-primary',
    },
    {
        class: ' b-secondary',
        title: '.b-secondary',
    },
    {
        class: 'b-t-secondary',
        title: '.b-t-secondary',
    },
    {
        class: 'b-b-secondary',
        title: '.b-b-secondary',
    },
    {
        class: 'b-primary',
        title: '.b-primary',
    },
    {
        class: 'b-l-secondary',
        title: 'b-r-secondary',
    },
    {
        class: 'b-success',
        title: '.b-success',
    },
    {
        class: 'b-t-success',
        title: '.b-t-success',
    },
    {
        class: 'b-b-success',
        title: '.b-b-success',
    },
    {
        class: 'b-l-success',
        title: '.b-l-success',
    },
    {
        class: 'b-r-success',
        title: 'b-r-success',
    },
    {
        class: 'b-danger',
        title: '.b-danger',
    },
    {
        class: 'b-t-danger',
        title: '.b-t-danger',
    },
    {
        class: 'b-b-danger',
        title: '.b-b-danger',
    },
    {
        class: 'b-l-danger',
        title: '.b-l-danger',
    },
    {
        class: 'b-r-danger',
        title: 'b-r-danger',
    },
    {
        class: 'b-warning',
        title: '.b-warning',
    },
    {
        class: 'b-t-warning',
        title: '.b-t-warning',
    },
    {
        class: 'b-b-warning',
        title: '.b-b-warning',
    },
    {
        class: 'b-l-warning',
        title: '.b-l-warning',
    },
    {
        class: 'b-r-warning',
        title: 'b-r-warning',
    },
    {
        class: 'b-info',
        title: '.b-info',
    },
    {
        class: 'b-b-info',
        title: '.b-b-info',
    },
    {
        class: 'b-t-info',
        title: '.b-t-info',
    },
    {
        class: 'b-b-info',
        title: '.b-b-info',
    },
    {
        class: 'b-l-info',
        title: '.b-l-b-info',
    },
    {
        class: 'b-r-info',
        title: 'b-r-info',
    },
    {
        class: 'b-b-dark',
        title: '.b-b-dark',
    },
    {
        class: 'b-t-dark',
        title: '.b-t-dark',
    },
    {
        class: 'b-b-dark',
        title: '.b-b-dark',
    },
    {
        class: 'b-l-dark',
        title: '.b-l-dark',
    },
    {
        class: 'b-r-dark',
        title: 'b-r-dark',
    },
    {
        class: 'b-b-light',
        title: '.b-b-light',
    },
    {
        class: 'b-t-light',
        title: '.b-t-light',
    },
    {
        class: 'b-b-light',
        title: '.b-b-light',
    },
    {
        class: 'b-l-light',
        title: '.b-l-light',
    },
    {
        class: 'b-r-light',
        title: 'b-r-light',
    },

];

export const ImageSize = [
    {
        image: 'assets/images/avatars/1.jpg',
        class: 'img-50 img-h-50',
    },
    {
        image: 'assets/images/avatars/1.jpg',
        class: 'img-60 img-h-60',
    },
    {
        image: 'assets/images/avatars/1.jpg',
        class: 'img-70 img-h-70',
    },
    {
        image: 'assets/images/avatars/1.jpg',
        class: 'img-80 img-h-80',
    },
    {
        image: 'assets/images/avatars/1.jpg',
        class: 'img-90 img-h-90',
    },
    {
        image: 'assets/images/avatars/1.jpg',
        class: 'img-100 img-h-100',
    },
];
export const FontStyle = [
    {
        strong: '.f-s-italic',
        class: 'f-s-italic'
    },
    {
        strong: '.f-s-oblique',
        class: 'f-s-oblique'
    },
    {
        strong: '.f-s-initial',
        class: 'f-s-initial'
    },
    {
        strong: '.f-s-inherit',
        class: 'f-s-inherit'
    },
];

export const FontSize = [
    {
        class: 'fs-6',
        text: 'Font-size .f-6'
    },
    {
        class: 'fs-5',
        text: 'Font-size .fs-5'
    },
    {
        class: 'fs-4',
        text: 'Font-size .fs-4'
    },
    {
        class: 'fs-3',
        text: 'Font-size .fs-3'
    },
    {
        class: 'fs-2',
        text: 'Font-size .fs-2'
    },
    {
        class: 'fs-1',
        text: 'Font-size .fs-1'
    }
];