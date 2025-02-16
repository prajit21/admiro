export interface comments {
  img: string;
  name: string;
  designation: string;
  hits: number;
  comments: number;
  desc: string;
  reply: boolean;
}

export interface course {
  id: number;
  title: string;
  type: string;
  checkId? : string;
  buttonType?: string;
  check: check[]
}

export interface check{
  checkId: string;
  checkTitle: string;
  name? : string;
  checked? : boolean;
}
export const findCourse : course[] = [
{
  id: 1,
  title: 'Categories',
  type: 'checkbox',
  check: [
    {
      checkId: 'chk-ani',
      checkTitle: 'Accounting',
    },
    {
      checkId: 'chk-ani0',
      checkTitle: 'Design',
    },
    {
      checkId: 'chk-ani1',
      checkTitle: 'Development',
    },
    {
      checkId: 'chk-ani2',
      checkTitle: 'Management',
    },
  ],
},
{
  id: 2,
  title: 'Duration',
  type: 'checkbox',
  checkId: 'chk-ani',
  check: [
    {
      checkId: 'chk-ani6',
      checkTitle: '0-50 hours',
    },
    {
      checkId: 'chk-ani7',
      checkTitle: '50-100 hours',
    },
    {
      checkId: 'chk-ani8',
      checkTitle: '100+ hours',
    },
  ],
},
{
  id: 3,
  title: 'Price',
  buttonType: 'checkbox',
  type: 'radio',
  check: [
    {
      checkId: 'edo-ani',
      checkTitle: 'All Courses',
      name: 'rdo - ani',
      checked: false,
    },
    {
      checkId: 'edo-ani14',
      checkTitle: 'Paid Courses',
      name: 'rdo - ani',
      checked: false,
    },
    {
      checkId: 'edo-ani2',
      checkTitle: 'Free Courses',
      name: 'rdo - ani',
      checked: true,
    },
  ],
},
{
  id: 4,
  title: 'Status',
  type: 'checkbox',
  checkId: 'chk-ani',
  check: [
    {
      checkId: 'chk-ani3',
      checkTitle: 'Registration',
    },
    {
      checkId: 'chk-ani4',
      checkTitle: 'Progress',
    },
    {
      checkId: 'chk-ani5',
      checkTitle: 'Completed',
    },
  ],
},
];

export const Categories = [
  {
      title: "Design",
      padding: false,
      isCollapsed: false,
      designer: [
          {
              designerTitle: "UI Design",
              count: "28"
          },
          {
              designerTitle: "UX Design",
              count: "35"
          },
          {
              designerTitle: "Interface Design",
              count: "26"
          },
          {
              designerTitle: "User Experience",
              count: "36"
          },
      ]
  },
  {
      title: "Development",
      padding: true,
      designer: [
          {
              designerTitle: "Frontend Development",
              count: "48"
          },
          {
              designerTitle: "Backend Development",
              count: "19"
          },
      ]
  }
]

export const upcomingCourse = [
  {
      title: 'UX Development',
      courseBy: 'Development Team',
      rating: 4.5,
      day: '18',
      month: 'Dec',
  },
  {
      title: 'Business Analyst',
      courseBy: 'Analyst Team.',
      rating: 5,
      day: '28',
      month: 'Dec',
  },
  {
      title: 'Web Development',
      courseBy: 'Designer',
      rating: 4,
      day: '5',
      month: 'Jan',
  },
]

export const learningTopData = [
  {
    id: 1,
    img: "assets/images/faq/1.jpg",
    date: "05",
    month: "January 2022",
    title: "Java Language",
    by: "Paige Turner",
    hits: "15",
    desc: "Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple"
  },
  {
    id: 2,
    img: "assets/images/faq/2.jpg",
    date: "10",
    month: "March 2022",
    title: "Web Development",
    by: "Paige Turner",
    hits: "34",
    desc: "Web development is the work involved in developing a website for the Internet or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social"
  }
]

export const learningData = [
  {
    id: 1,
    img: "assets/images/faq/3.jpg",

  },
  {
    id: 2,
    img: "assets/images/faq/1.jpg",
  },
  {
    id: 3,
    img: "assets/images/faq/4.jpg",
  },
  {
    id: 4,
    img: "assets/images/faq/2.jpg",
  },
  {
    id: 5,
    img: "assets/images/faq/4.jpg",

  },
  {
    id: 6,
    img: "assets/images/faq/3.jpg",
  },
]

export const commentsData: comments[] = [
  {
    img: "assets/images/avtar/3.jpg",
    name: "Jolio Mark",
    designation: "( Designer )",
    hits: 2,
    comments: 598,
    desc: "The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.",
    reply: false
  },
  {
    img: "assets/images/avtar/4.jpg",
    name: "Jolio Mark",
    designation: "( Designer )",
    hits: 22,
    comments: 398,
    desc: "The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.",
    reply: true
  },
  {
    img: "assets/images/avtar/7.jpg",
    name: "Jolio Mark",
    designation: "( Designer )",
    hits: 2,
    comments: 598,
    desc: "Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.",
    reply: false
  },
]
