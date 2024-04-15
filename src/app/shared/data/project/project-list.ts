export interface Project {
  id: number,
  title: string,
  badge: string,
  img: string,
  sites: string,
  desc: string,
  issue: number,
  resolved: number,
  class?: string,
  comment: number,
  like: number,
  progress: number,
  customers_img1: string,
  customers_img2: string,
  customers_img3: string,
  projectLaval: string,
}

export const ProjectList: Project[] = [
  {
    id: 1,
    title: 'Cutting-Edge Design',
    badge: 'Doing',
    class: 'danger',
    img: 'assets/images/user/4.jpg',
    sites: 'Themeforest, australia',
    desc: 'Responsive Layout: The design is responsive and tablets, and mobile devices',
    issue: 12,
    resolved: 5,
    comment: 7,
    like: 10,
    progress: 70,
    customers_img1: 'assets/images/user/3.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '70%'
  },
  {
    id: 2,
    title: 'Customization Options',
    badge: 'Done',
    class: 'success',
    img: 'assets/images/user/3.jpg',
    sites: 'Envato, australia',
    desc: 'Consistency and Branding: The design maintains consistency , color scheme, andtypography. ',
    issue: 24,
    resolved: 24,
    comment: 40,
    like: 3,
    progress: 100,
    customers_img1: 'assets/images/user/2.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  },

  {
    id: 3,
    title: 'Mobile-Friendly',
    badge: 'Done',
    class: 'success',
    img: 'assets/images/user/4.jpg',
    sites: 'Envato, australia',
    desc: 'Error Handling and Feedback: The design incorporates and feedback mechanisms.',
    issue: 40,
    resolved: 40,
    comment: 20,
    like: 2,
    progress: 100,
    customers_img1: 'assets/images/user/4.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  },
  {
    id: 4,
    title: 'Universal admin Design',
    badge: 'Done',
    class: 'success',
    img: 'assets/images/user/5.jpg',
    sites: 'Envato, australia',
    desc: 'Customization Options: Depending on It is designed to be responsive options.',
    issue: 24,
    resolved: 24,
    comment: 40,
    like: 3,
    progress: 100,
    customers_img1: 'assets/images/user/6.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  },
  {
    id: 5,
    title: 'Modular Structure ',
    badge: 'Doing',
    class: 'danger',
    img: 'assets/images/user/1.jpg',
    sites: 'Themeforest, australia',
    desc: 'Customization Options: Poco admin offers Attention is given to readability a visually extensive.',
    issue: 12,
    resolved: 5,
    comment: 7,
    like: 10,
    progress: 70,
    customers_img1: 'assets/images/user/6.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '70%'
  },
  {
    id: 6,
    title: 'Dazzling Admin Design',
    badge: 'Done',
    class: 'success',
    img: 'assets/images/user/10.jpg',
    sites: 'Themeforest, australia',
    desc: 'User-friendly Navigation:Dazzling organized categories and subcategories of a sidebar menu.',
    issue: 40,
    resolved: 40,
    comment: 20,
    like: 2,
    progress: 100,
    customers_img1: 'assets/images/user/4.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  }
];
