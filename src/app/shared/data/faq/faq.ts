export interface faqTopPart {
   title: string;
   colClass?: string;
   desc: string;
   icon: string;
}

export interface featuredTutorial {
   id: number;
   rating: number;
   img: string;
   post: string;
   desc: string;
   date: string;
}

export interface articlesAndVideos {
   row: number;
   data: {
      id: number;
      icon: string;
      title?: string;
      des?: string;
   }[];
}[]

export const FaqTopPartData: faqTopPart[] = [
   {
      title: 'Articles',
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: 'file-text'
   },
   {
      title: 'Knowledgebase',
      colClass: 'col-sm-6',
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: 'book-open'
   },
   {
      title: 'Support',
      colClass: 'col-sm-6',
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      icon: 'aperture'
   }
]

export const navigationData1 = [
   {
      icon: 'edit',
      title: 'Tutorials',

   },
   {
      icon: 'globe',
      title: 'Help center',

   },
   {
      icon: 'book-open',
      title: 'Knowledgebase',
   },
   {
      icon: 'file-text',
      title: 'Articles',
      count: '42'
   },
   {
      icon: 'youtube',
      title: 'Video Tutorials',
      count: '648',
      line:true
   },
   {
      icon: 'message-circle',
      title: 'Ask our community',

   },
   {
      icon: 'mail',
      title: 'Contact us',

   },
]

export const featuredTutorialData: featuredTutorial[] = [
   {
      id: 1,
      rating: 5,
      img: 'assets/images/faq/1.jpg',
      post: 'Web Design',
      desc: "Web Design Trends: Provide an overview of current web design trends, such as minimalist design, microinteractions, dark mode, and immersive experiences.",
      date: 'May 15, 2024',
   },
   {
      id: 2,
      rating: 5,
      img: 'assets/images/faq/2.jpg',
      post: 'Web Development',
      desc: "Web development is a vast field, and there are many other aspects and technologies involved. It's important to continuously learn and keep up with the latest trends and technologies to stay.",
      date: 'May 12, 2024',
   },
   {
      id: 3,
      rating: 5,
      img: 'assets/images/faq/3.jpg',
      post: 'UI Design',
      desc: "UI design is an iterative process that involves research, ideation, prototyping, testing, and refinement. It requires a blend of creativity, user empathy, and understanding of design.",
      date: 'May 13, 2024',
   },
   {
      id: 4,
      rating: 5,
      img: 'assets/images/faq/4.jpg',
      post: 'UX Design',
      desc: "UX design is a holistic approach that focuses on understanding and meeting user needs, ultimately aiming to create products that are valuable, usable, and delightful for the users.",
      date: 'May 14, 2024',
   }
]

export const articlesAndVideosData: articlesAndVideos[] = [
   {
      row: 1,
      data: [
         {
            id: 1,
            icon: 'codepen',
            title: 'Using Video',
            des:'The web is a very big place, and if you are the typical internet base user.',
         },
         {
            id: 2,
            title: 'Vel illum qu',
            icon: 'codepen',
            des:'A book giving information on many subjects or on many aspects of one subject.'

         },
         {
            id: 3,
            title: 'Cum sociis natoqu',
            icon: 'codepen',
            des:'Simple demos of frequently asked questions about using the information resources'
         },
      ]
   },
   {
      row: 2,
      data: [
         {
            id: 4,
            title: 'Donec pede justo',
            icon: 'file-text',
            des:'Website is the process of ensuring that the pages on the website conform.'
         },
         {
            id: 5,
            title: 'Nam quam nunc',
            icon: 'file-text',
            des:'Tailwind is so low-level, it never encourages you to design the same site twice.'
         },
         {
            id: 6,
            title: 'Using Video',
            icon: 'file-text',
            des:'A book giving information on many subjects or on many aspects of one subject.'
         },
      ]
   },
   {
      row: 3,
      data: [
         {
            id: 7,
            title: 'Vel illum qu',
            icon: 'youtube',
            des:'Simple demos of frequently asked questions about using the information resources'
         },
         {
            id: 8,
            title: 'Cum sociis natoqu',
            icon: 'youtube',
            des:'Website is the process of ensuring that the pages on the website conform.'
         },
         {
            id: 9,
            title: 'Donec pede justo',
            icon: 'youtube',
            des:'Web is so high-level, it never encourages you to design the same site twice'
         },
      ]
   }
]
export const questionData = [
   {
      data: [
         {
            panel: 'allData',
            title: 'Integrating WordPress with Your Website?',
            desc: 'How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.',
         },
         {
            panel: 'Second',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Third',
            title: 'Meta Tags in WordPress ?',
            desc: 'Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.',
         },
         {
            panel: 'Fourth',
            title: 'WordPress in Your Language ?',
            desc: 'As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.',
         },
      ]
   },
   {
      heading: 'Intellectual Property',
      data: [
         {
            panel: 'Fifth',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Six',
            title: ' WordPress in Your Language ?',
            desc: 'As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.',
         },
         {
            panel: 'Seven',
            title: 'Integrating WordPress with Your Website ?',
            desc: 'How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.',
         },
      ]
   },
   {
      heading: 'Selling And Buying',
      data: [
         {
            panel: 'Nine',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Ten',
            title: 'Meta Tags in WordPress ?',
            desc: 'Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.',
         },
         {
            panel: 'Eleven',
            title: 'Validating a Website ?',
            desc: 'Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.',
         },
         {
            panel: 'Twelve',
            title: 'Know Your Sources ?',
            desc: 'A book or set of books giving information on many subjects or on many aspects of one subject. Some are intended as an entry point into research for a general audience, some provide detailed information.',
         },
      ]
   },
   {
      heading: 'User Accounts',
      data: [
         {
            panel: 'Thirteen',
            title: 'Integrating WordPress with Your Website ?',
            desc: 'How you approach this process will depend on which web host you use. For example, a lot of hosting providers use cPanel, which includes an option to set up subdomains with just a few clicks.',
         },
         {
            panel: 'Fourteen',
            title: 'WordPress Site Maintenance ?',
            desc: 'We’ve just published a detailed on how to backup your WordPress website, however, if you’re in a hurry, here’s a quick solution.',
         },
         {
            panel: 'Fifteen',
            title: 'WordPress in Your Language ?',
            desc: 'As of version 4.0, you can have WordPress automatically install the language of your choice during the installation process.',
         },
         {
            panel: 'Sixteen',
            title: 'Validating a Website ?',
            desc: 'Validating a website is the process of ensuring that the pages on the website conform to the norms or standards defined by various organizations.',
         },
         {
            panel: 'Saventeen',
            title: 'Meta Tags in WordPress ?',
            desc: 'Manually adding meta tags in WordPress is relatively simple. For this demo, we’ll use the example from the WordPress Codex. Imagine you’re Harriet Smith, a veterinarian who blogs about their animal stories on WordPress.',
         },

      ]
   }
]

export const LatestUpdates = [
   {
      icon: 'rotate-cw',
      des: '<a class="font-primary" href="javascript:void(0)">David Linner </a>requested money back for a double debit card charge',
      time: '10 minutes ago'
   },
   {
      icon: 'dollar-sign',
      des: 'All sellers have received monthly payouts',
      time: '2 hours ago',
   },
   {
      icon: 'link',
      des: 'User Christopher <a class="font-primary" href="javascript:void(0)">Wallace</a> is on hold and awaiting for staff reply',
      time: '45 minutes ago',
   },
   {
      icon: 'check',
      des: 'Ticket #43683 has been closed by <a class="font-primary" href="javascript:void(0)">Victoria Wilson</a>',
      time: 'Dec 7, 11:48',
   },
]