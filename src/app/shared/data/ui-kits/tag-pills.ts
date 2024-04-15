export interface button {
    mainTitle: string,
    title: string,
    item: items[];
}

export interface items {
    class: string,
    text?: string,
    icon?: string
    icon_enble: boolean
}


export const buttons: button[] =
    [
        {
            mainTitle: 'Badges',
            title: ' Use the  <code>.badge </code>utility class to make more badges.',
            item: [
                {
                    class: 'badge-primary rounded-1',
                    text: 'Primary',
                    icon_enble: false
                },
                {
                    class: 'badge-secondary rounded-1',
                    text: 'Secondary',
                    icon_enble: false
                },
                {
                    class: 'badge-success rounded-1',
                    text: 'Success',
                    icon_enble: false
                },
                {
                    class: 'badge-info rounded-1',
                    text: 'Info',
                    icon_enble: false
                },
                {
                    class: 'badge-warning rounded-1',
                    text: 'Warning',
                    icon_enble: false
                },
                {
                    class: 'badge-danger rounded-1',
                    text: 'Danger',
                    icon_enble: false
                },
                {
                    class: 'badge-light text-dark rounded-1',
                    text: 'Light',
                    icon_enble: false
                },
                {
                    class: 'badge-dark rounded-1',
                    text: 'Dark',
                    icon_enble: false
                },

            ]
        },
    ]

export const pills: button[] = [
    {
        mainTitle: 'Pills',
        title: ' <span>Use the</span><code>.rounded-pill</code><span> utility class to make badges more rounded.</span> ',
        item: [
            {
                class: 'badge rounded-pill badge-primary',
                text: 'Primary',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-secondary',
                text: 'Secondary',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-success',
                text: 'Success',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-info',
                text: 'Info',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-warning',
                text: 'Warning',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-danger',
                text: 'Danger',
                icon_enble: false
            },
            {
                class: 'rounded-pill badge-light text-dark',
                text: 'Light',
                icon_enble: false
            },
            {
                class: 'badge rounded-pill badge-dark tag-pills-sm-mb',
                text: 'Dark',
                icon_enble: false
            },
        ]
    },
]

export const NumberBadge: button[] = [
    {
        mainTitle: 'Number Badge',
        title: '   Use numbers as a badge with the help of <code>.badge</code> class.',
        item: [
            {
                class: 'badge badge-primary rounded-1',
                text: '1',
                icon_enble: false
            },
            {
                class: 'badge badge-secondary rounded-1',
                text: '2',
                icon_enble: false
            },
            {
                class: 'badge badge-success rounded-1',
                text: '3',
                icon_enble: false
            },
            {
                class: 'badge badge-info rounded-1',
                text: '4',
                icon_enble: false
            },
            {
                class: 'badge badge-warning rounded-1',
                text: '5',
                icon_enble: false
            },
            {
                class: 'badge badge-danger rounded-1',
                text: '6',
                icon_enble: false
            },
            {
                class: ' badge badge-light text-dark rounded-1',
                text: '7',
                icon_enble: false
            },
            {
                class: 'badge badge-dark rounded-1',
                text: '8',
                icon_enble: false
            },
        ]
    },


]
export const NumberPillstag: button[] = [
    {
        mainTitle: 'Number Pills',
        title: 'Set rounded pill with number using <code>.rounded-circle</code> class.',
        item: [
            {
                class: 'badge rounded-circle badge-p-space badge-primary',
                text: '1',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-secondary',
                text: '2',
                icon_enble: false
            },

            {
                class: 'badge rounded-circle badge-p-space badge-success',
                text: '3',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-info',
                text: '4',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-warning',
                text: '5',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-danger',
                text: '6',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge badge-light text-dark',
                text: '7',
                icon_enble: false
            },
            {
                class: 'badge rounded-circle badge-p-space badge-dark',
                text: '8',
                icon_enble: false
            },
        ]
    },
];
export const iconbadge: button[] = [
    {
        mainTitle: 'Icon With Badge ',
        title: 'Use icons with the help of <code>.badge </code>class.',
        item: [
            {
                class: 'badge-primary text-light',
                icon: 'fa-light fa-dollar-sign',
                icon_enble: true
            },
            {
                class: 'badge-secondary',
                icon: 'fa-solid fa-headphones-simple',
                icon_enble: true
            },
            {
                class: 'badge-success',
                icon: 'fa-solid fa-link',
                icon_enble: true
            },
            {
                class: 'badge-info',
                icon: 'fa-brands fa-github',
                icon_enble: true
            },
            {
                class: 'badge-warning',
                icon: 'fa-solid fa-award',
                icon_enble: true
            },
            {
                class: 'badge-danger',
                icon: 'fa-solid fa-chart-line',
                icon_enble: true
            },
            {
                class: 'badge-light text-dark',
                icon: 'fa-regular fa-heart',
                icon_enble: true
            },
            {
                class: 'badge-dark',
                icon: 'fa-regular fa-envelope',
                icon_enble: true
            }
        ]
    },
]

export const iconpills: button[] = [
    {
        mainTitle: 'Icon With Pills',
        title: '<span>Use the</span><code>.badge</code><span> utility class to make more icons.</span>',
        item: [
            {
                class: 'rounded-circle badge-primary',
                icon: 'fa-light fa-dollar-sign',
                icon_enble: true
            },
            {
                class: 'rounded-circle badge-secondary',
                icon: 'fa-solid fa-headphones-simple',
                icon_enble: true
            },
            {
                class: 'rounded-circle badge-success',
                icon: 'fa-solid fa-link',
                icon_enble: true
            },
            {
                class: 'rounded-circle badge-info',
                icon: 'fa-brands fa-github',
                icon_enble: true
            },
            {
                class: 'rounded-circle badge-warning',
                icon: 'fa-solid fa-award',
                icon_enble: true
            },
            {
                class: 'rounded-circle badge-danger',
                icon: 'fa-solid fa-chart-line',
                icon_enble: true
            },
            {
                class: 'rounded-circle badge-light  text-dark ',
                icon: 'fa-regular fa-heart',
                icon_enble: true
            },
            {
                class: 'rounded-circle badge-dark',
                icon: 'fa-regular fa-envelope',
                icon_enble: true
            }
        ]
    },
]
export const BadgePartButtons = [
    {
        color: 'primary',
        text: 'Messages',
        icon: 'fa-regular fa-envelope',
    },
    {
        color: 'secondary',
        text: 'notifications',
        icon: 'fa-regular fa-bell',
    },
    {
        color: 'success',
        text: 'Update available',
        icon: 'fa-solid fa-gear',
    },
    {
        color: 'info',
        text: 'Playing Now',
        icon: 'fa-solid fa-music',
    }
]

