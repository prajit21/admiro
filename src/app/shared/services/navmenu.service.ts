import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  headTitle1?: string;
  level?: number;
  badge?: boolean;
  path?: string;
  color?: string;
  line?: boolean;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  id?: number;
  bookmark?: boolean;
  children?: Menu[];
  horizontalList?: boolean;
  items?: Menu[]
}

@Injectable({
  providedIn: 'root'
})
export class NavmenuService {

  public language: boolean = false;
  public isShow: boolean = false;
  public closeSidebar: boolean = false;

  constructor() { }

  MENUITEMS: Menu[] = [
    {
      headTitle1: "General",
    },
    {
      id: 1,
      level: 1,
      title: "Dashboard",
      icon: "Home",
      badge: true,
      type: "sub",
      active: true,
      children: [
        { path: "/dashboard/default", color: 'primary', title: "Default", type: "link" },
        { path: "/dashboard/ecommerce", color: 'primary', title: "Ecommerce", type: "link" },
        { path: "/dashboard/education", color: 'primary', title: "Education", type: "link" },
      ],
    },
    {
      id: 2,
      level: 1,
      title: "Widgets",
      icon: "Pie",
      type: "sub",
      active: false,
      children: [
        { path: "/widgets/general", color: 'secondary', title: "General", type: "link" },
        { path: "/widgets/chart", color: 'secondary', title: "Chart", type: "link" },
      ],
    },
    {
      headTitle1: "Applications",
    },
    {
      id: 3,
      level: 1,
      title: "Project",
      icon: "Info-circle",
      type: "sub",
      active: false,
      horizontalList: true,
      children: [
        { path: "/project/list", color: 'tertiary', title: "Project List", type: "link" },
        { path: "/project/create", color: 'tertiary', title: "Create New", type: "link" },
      ],
    },
    {
      id: 4,
      level: 1,
      path: "/file-manager",
      title: "File Manager",
      color: 'primary',
      icon: "Paper",
      type: "link",
    },
    {
      id: 5,
      level: 1,
      title: "Ecommerce",
      type: "sub",
      icon: "Bag",
      horizontalList: true,
      active: false,
      children: [
        { path: "/ecommerce/products", color: 'tertiary', title: "Product", type: "link" },
        { path: "/ecommerce/product-page", color: 'tertiary', title: "Product page", type: "link" },
        { path: "/ecommerce/add-products", color: 'tertiary', title: "Add Product", type: "link" },
        { path: "/ecommerce/product-list", color: 'tertiary', title: "Product List", type: "link" },
        { path: "/ecommerce/payment-details", color: 'tertiary', title: "Payment Details", type: "link" },
        { path: "/ecommerce/order-history", color: 'tertiary', title: "Order History", type: "link" },
        {
          title: 'invoice',
          type: "sub",
          level: 2,
          active: false,
          children: [
            { path: "/invoice/invoice1", color: 'tertiary', title: "Invoice-1", type: "link" },
            { path: "/invoice/invoice2", color: 'tertiary', title: "Invoice-2", type: "link" },
            { path: "/invoice/invoice3", color: 'tertiary', title: "Invoice-3", type: "link" },
            { path: "/invoice/invoice4", color: 'tertiary', title: "Invoice-4", type: "link" },
            { path: "/invoice/invoice5", color: 'tertiary', title: "Invoice-5", type: "link" },
            { path: "/invoice/invoice6", color: 'tertiary', title: "Invoice-6", type: "link" },
          ]
        },
        { path: "/ecommerce/cart", color: 'tertiary', title: "Cart", type: "link" },
        { path: "/ecommerce/wishlist", color: 'tertiary', title: "Wishlist", type: "link" },
        { path: "/ecommerce/checkout", color: 'tertiary', title: "Checkout", type: "link" },
        { path: "/ecommerce/pricing", color: 'tertiary', title: "Pricing", type: "link" },
      ],
    },
    {
      id: 6,
      level: 1,
      title: "Letter-box",
      path: "/letter-box",
      color: 'secondary',
      icon: "Message",
      active: false,
      type: "link",
    },
    {
      id: 7,
      level: 1,
      title: "Chat",
      type: "sub",
      icon: "Chat",
      active: false,
      children: [
        { path: "/chat/private-chat", color: 'primary', title: "Private Chat", type: "link" },
        { path: "/chat/group-chat", color: 'primary', title: "Group Chat", type: "link" },
      ],
    },
    {
      id: 8,
      level: 1,
      title: "Users",
      icon: "Profile",
      type: "sub",
      active: false,
      children: [
        { path: "/user/users-profile", color: 'tertiary', title: "Users Profile", type: "link" },
        { path: "/user/profile-edit", color: 'tertiary', title: "Users Edit", type: "link" },
        { path: "/user/users-cards", color: 'tertiary', title: "Users Cards", type: "link" },
      ],
    },
    { level: 1, id: 9, path: "/bookmarks", title: "Bookmarks", color: 'tertiary', icon: "Bookmark", type: "link" },
    { level: 1, id: 10, path: "/contacts", bookmark: true, title: "Contact", color: 'primary', icon: "Contacts", type: "link" },
    { level: 1, id: 11, path: "/task", bookmark: true, title: "Tasks", color: 'secondary', icon: "Tick-square", type: "link" },
    { level: 1, id: 12, path: "/calender", title: "Calender", color: 'primary', icon: "Calendar", type: "link" },
    { level: 1, id: 13, path: "/social-app", title: "Social App", color: 'secondary', icon: "Camera", type: "link" },
    { level: 1, id: 14, path: "/todo", bookmark: true, title: "To-Do", color: 'tertiary', icon: "Edit", type: "link" },
    { level: 1, id: 15, path: "/search-pages", title: "Search Result", color: 'secondary', icon: "Search", type: "link" },
    {
      headTitle1: "Components",
    },
    {
      id: 16,
      level: 1,
      title: "Buttons",
      path: "/buttons",
      color: 'secondary',
      icon: "More-box",
      type: "link",
    },
    {
      id: 17,
      level: 1,
      title: "Ui-Kits",
      icon: "Folder",
      type: "sub",
      active: false,
      children: [
        { path: "/ui-kits/typography", color: 'primary', title: "Typography", type: "link" },
        { path: "/ui-kits/avatars", color: 'secondary', title: "Avatars", type: "link" },
        { path: "/ui-kits/grid", color: 'primary', title: "Grid", type: "link" },
        { path: "/ui-kits/helper-classes", color: 'primary', title: "Helper Classes", type: "link" },
        { path: "/ui-kits/tag-n-pills", color: 'secondary', title: "Tag & Pills", type: "link" },
        { path: "/ui-kits/progress-bar", color: 'secondary', title: "Progress", type: "link" },
        { path: "/ui-kits/popover", color: 'primary', title: "Popover", type: "link" },
        { path: "/ui-kits/tooltip", color: 'secondary', title: "Tooltip", type: "link" },
        { path: "/ui-kits/alert", color: 'tertiary', title: "Alert", type: "link" },
        { path: "/ui-kits/modal", color: 'tertiary', title: "Modal", type: "link" },
        { path: "/ui-kits/dropdown", color: 'tertiary', title: "Dropdown", type: "link" },
        { path: "/ui-kits/according", color: 'primary', title: "Accordion", type: "link" },
        { path: "/ui-kits/tabs", color: 'secondary', title: "Tabs", type: "link" },
        { path: "/ui-kits/list", color: 'primary', title: "Lists", type: "link" },
      ],
    },
    {
      id: 18,
      level: 1,
      title: "Bonus UI",
      icon: "Ticket-star",
      type: "sub",
      horizontalList: true,
      active: false,
      children: [
        { path: "/bonus-ui/breadcrumb", color: 'primary', title: "Breadcrumb", type: "link", },
        { path: "/bonus-ui/pagination", color: 'secondary', title: "Pagination", type: "link" },
        { path: "/bonus-ui/ribbons", color: 'tertiary', title: "Ribbons", type: "link" },
        { path: "/bonus-ui/toasts", color: 'secondary', title: "Toasts", type: "link" },
        { path: "/bonus-ui/rating", color: 'primary', title: "Rating", type: "link" },
        { path: "/bonus-ui/dropzone", color: 'secondary', title: "Dropzone", type: "link" },
        { path: "/bonus-ui/sweetalert2", color: 'tertiary', title: "SweetAlert2", type: "link", },
        { path: "/bonus-ui/owl-carousel", color: 'secondary', title: "Owl Carousel", type: "link", },
        { path: "/bonus-ui/range-slider", color: 'primary', title: "Range Slider", type: "link", },
        { path: "/bonus-ui/image-cropper", color: 'tertiary', title: "Image Cropper", type: "link", },
        { path: "/bonus-ui/basic-card", color: 'primary', title: "Basic Card", type: "link" },
        { path: "/bonus-ui/creative-card", color: 'secondary', title: "Creative Card", type: "link", },
        { path: "/bonus-ui/timeline", color: 'tertiary', title: "Timeline", type: "link" },
      ],
    },
    {
      id: 19,
      level: 1,
      title: "Icons",
      icon: "Activity",
      type: "sub",
      active: false,
      children: [
        { path: "/icons/flag-icons", color: 'tertiary', title: "Flag icon", type: "link" },
        { path: "/icons/fontawesome-icons", color: 'secondary', title: "Fontawesome Icon", type: "link" },
        { path: "/icons/ico-icons", color: 'tertiary', title: "Ico Icon", type: "link" },
        { path: "/icons/themify-icons", color: 'primary', title: "Themify Icon", type: "link" },
        { path: "/icons/feather-icons", color: 'secondary', title: "Feather Icon", type: "link" },
        { path: "/icons/weather-icons", color: 'tertiary', title: "Weather Icon", type: "link" },
      ],
    },

    {
      id: 20,
      level: 1,
      title: "Charts",
      icon: "Chart",
      type: "sub",
      active: false,
      children: [
        { path: "/chart/apex-chart", color: 'primary', title: "Apex Chart", type: "link" },
        { path: "/chart/chartist-chart", color: 'tertiary', title: "Chartist Chart", type: "link" },
        { path: "/chart/chartjs-chart", color: 'secondary', title: "Chartjs Chart", type: "link" },
        { path: "/chart/google-chart", color: 'primary', title: "Google Chart", type: "link" },
      ],
    },
    {
      headTitle1: "Forms & Table",
    },
    {
      id: 21,
      level: 1,
      title: "Form Controls",
      type: "sub",
      icon: "Filter",
      active: false,
      children: [
        { path: "/form-controls/base-input", color: 'secondary', title: "Base Input", type: "link" },
        { path: "/form-controls/checkbox-radio", color: 'tertiary', title: "Checkbox Radio", type: "link" },
        { path: "/form-controls/input-groups", color: 'secondary', title: "Input Groups", type: "link" },
        { path: "/form-controls/mega-options", color: 'primary', title: "Mega Options", type: "link" },
        { path: "/form-controls/validation", color: 'secondary', title: "Form Validation", type: "link" },
      ],
    },
    {
      id: 22,
      level: 1,
      title: "Form Widgets",
      type: "sub",
      icon: "Scan",
      active: false,
      children: [
        { path: "/form-widgets/datepicker", color: 'secondary', title: "Datepicker", type: "link" },
        { path: "/form-widgets/touchspin", color: 'secondary', title: "Touchspin", type: "link" },
        { path: "/form-widgets/select2", title: "Select2", type: "link" },
        { path: "/form-widgets/switch", color: 'tertiary', title: "Switch", type: "link" },
        { path: "/form-widgets/typeahead", color: 'secondary', title: "Typeahead", type: "link" },
        { path: "/form-widgets/clipboard", color: 'tertiary', title: "Clipboard", type: "link" },
      ],
    },
    {
      id: 23,
      level: 1,
      title: "Tables",
      icon: "Edit-line",
      type: "sub",
      active: false,
      children: [
        {
          title: "Bootstrap Tables",
          type: "sub",
          level: 2,
          active: false,
          children: [
            { path: "/table/bootstrap-tables/basic-table", color: 'primary', title: "Basic Table", type: "link" },
            { path: "/table/bootstrap-tables/table-components", color: 'secondary', title: "Table Components", type: "link" },
          ],
        },
        {
          title: "Data Table",
          active: false,
          color: 'tertiary',
          type: "link",
          path: "/table/datatable",
        },
      ],
    },
    {
      headTitle1: "Pages",

    },
    { level: 1, id: 24, path: "/sample-page", title: "Sample Page", color: 'primary', icon: "Paper-plus", type: "link" },
    {
      id: 25,
      level: 1,
      title: "Others",
      color: 'tertiary',
      icon: "Password",
      type: "sub",
      active: false,
      children: [
        {
          title: "Error Pages",
          type: "sub",
          level: 2,
          active: false,
          children: [
            {
              path: "/error-page/error-page1",
              color: 'primary',
              title: "Error Page 1",
              type: "link",
            },
            {
              path: "/error-page/error-page2",
              color: 'secondary',
              title: "Error Page 2",
              type: "link",
            },
            {
              path: "/error-page/error-page3",
              color: 'primary',
              title: "Error Page 3",
              type: "link",
            },
            {
              path: "/error-page/error-page4",
              color: 'tertiary',
              title: "Error Page 4",
              type: "link",
            },
            {
              path: "/error-page/error-page5",
              color: 'primary',
              title: "Error Page 5",
              type: "link",
            },
            {
              path: "/error-page/error-page6",
              color: 'secondary',
              title: "Error Page 6",
              type: "link",
            },
          ],
        },
        {
          title: "Authentication",
          type: "sub",
          level: 2,
          active: false,
          children: [
            {
              path: "/authentication/simple",
              color: 'tertiary',
              title: "Login Simple",
              type: "link",
            },
            {
              path: "/authentication/image-one",
              color: 'primary',
              title: "Login with Bg Image",
              type: "link",
            },
            {
              path: "/authentication/image-two",
              color: 'tertiary',
              title: "Login with Image two",
              type: "link",
            },
            {
              path: "/authentication/validation",
              color: 'secondary',
              title: "Login with Validation",
              type: "link",
            },
            {
              path: "/authentication/tooltip",
              color: 'tertiary',
              title: "Login with Tooltip",
              type: "link",
            },
            {
              path: "/authentication/sweetalert",
              color: 'primary',
              title: "Login with Sweetalert",
              type: "link",
            },
            {
              path: "/authentication/register-simple",
              color: 'tertiary',
              title: "Register Simple",
              type: "link",
            },
            {
              path: "/authentication/register-image-one",
              color: 'primary',
              title: "Register with Bg Image",
              type: "link",
            },
            {
              path: "/authentication/register-image-two",
              color: 'secondary',
              title: "Register with image two",
              type: "link",
            },
            {
              path: "/authentication/unlock-user",
              color: 'secondary',
              title: "Unlock User",
              type: "link",
            },
            {
              path: "/authentication/forget-password",
              color: 'primary',
              title: "Forget Password",
              type: "link",
            },
            {
              path: "/authentication/reset-password",
              color: 'primary',
              title: "Reset Password",
              type: "link",
            },
            {
              path: "/authentication/maintenance",
              color: 'secondary',
              title: "Maintenance",
              type: "link",
            },
          ],
        },
        {
          title: "Coming Soon",
          type: "sub",
          level: 2,
          active: false,
          children: [
            {
              path: "/coming-soon/coming-soon-simple",
              color: 'secondary',
              title: "Coming Simple",
              type: "link",
            },
            {
              path: "/coming-soon/coming-soon-video",
              color: 'secondary',
              title: "Coming With Bg Video",
              type: "link",
            },
            {
              path: "/coming-soon/coming-soon-image",
              title: "Coming With Bg Image",
              color: 'primary',
              type: "link",
            },
          ],
        },
        {
          title: "Email templates",
          type: "sub",
          active: false,
          level: 2,
          children: [
            {
              path: "https://admin.pixelstrap.com/enzo/template/basic-template.html",
              color: 'primary',
              title: "Basic Email",
              type: "extTabLink",
            },
            {
              path: "https://admin.pixelstrap.com/enzo/template/email-header.html",
              color: 'primary',
              title: "Basic With Header",
              type: "extTabLink",
            },
            {
              path: "https://admin.pixelstrap.com/enzo/template/template-email.html",
              color: 'primary',
              title: "Ecomerce Template",
              type: "extTabLink",
            },
            {
              path: "https://admin.pixelstrap.com/enzo/template/template-email-2.html",
              color: 'primary',
              title: "Email Template 2",
              type: "extTabLink",
            },
            {
              path: "https://admin.pixelstrap.com/enzo/template/ecommerce-templates.html",
              color: 'primary',
              title: "Ecommerce Email",
              type: "extTabLink",
            },
            {
              path: "https://admin.pixelstrap.com/enzo/template/email-order-success.html",
              color: 'primary',
              title: "Order Success",
              type: "extTabLink",
            },
          ],
        },
      ],
    },
    {
      headTitle1: "Miscellaneous",
    },
    {
      id: 26,
      level: 1,
      title: "Gallery",
      icon: "Gallery",
      type: "sub",
      active: false,
      children: [
        { path: "/gallary/gallary-grid", color: 'tertiary', title: "Gallery Grid", type: "link" },
        { path: "/gallary/gallery-grid-desc", color: 'secondary', title: "Gallery Grid Desc", type: "link" },
        { path: "/gallary/masonry-gallery", color: 'tertiary', title: "Masonry Gallery", type: "link" },
        { path: "/gallary/masonry-with-desc", color: 'secondary', title: "Masonry With Desc", type: "link" },
        { path: "/gallary/hover-effects", color: 'tertiary', title: "Hover Effects", type: "link" },
      ],
    },
    {
      id: 27,
      level: 1,
      title: "Blog",
      icon: "Game",
      type: "sub",
      horizontalList: true,
      active: false,
      children: [
        { path: "/blog/blog-details", color: 'primary', title: "Blog Details", type: "link" },
        { path: "/blog/blog-single", color: 'secondary', title: "Blog Single", type: "link" },
        { path: "/blog/add-post", color: 'tertiary', title: "Add Post", type: "link" },
      ],
    },
    {
      level: 1,
      id: 28, path: "/faq",
      color: 'primary',
      title: "FAQ",
      icon: "Danger",
      type: "link",
      active: false
    },
    {
      id: 29,
      level: 1,
      title: "Job Search",
      icon: "Filter-2",
      type: "sub",
      active: false,
      children: [
        { path: "/job/cards-view", color: 'secondary', title: "Cards View", type: "link" },
        { path: "/job/list-view", color: 'primary', title: "List View", type: "link" },
        { path: "/job/job-details", color: 'primary', title: "Job Details", type: "link" },
        { path: "/job/apply", color: 'secondary', title: "Apply", type: "link" },
      ],
    },
    {
      id: 30,
      level: 1,
      title: "Learning",
      icon: "Work",
      type: "sub",
      active: false,
      children: [
        { path: "/learning/learning-list", color: 'primary', title: "Learning List", type: "link" },
        { path: "/learning/detailed-course", color: 'tertiary', title: "Detailed Course", type: "link" },
      ],
    },
    {
      id: 31,
      level: 1,
      title: "Maps",
      icon: "Discovery",
      type: "sub",
      active: false,
      children: [
        { path: "/maps/map-google", color: 'primary', title: "Google Map", type: "link" },
        { path: "/maps/leaflet-map", color: 'tertiary', title: "Leaflet Map", type: "link" },
      ],
    },
    {
      id: 32,
      level: 1,
      title: "Editors",
      icon: "Shield",
      type: "sub",
      active: false,
      children: [
        { path: "/editors/ngx-editors", color: 'secondary', title: "NGX Editor", type: "link" },
        { path: "/editors/mde-editors", color: 'tertiary', title: "MDE Editor", type: "link" }
      ],
    },
    {
      level: 1,
      id: 33,
      path: "/knowledgebase",
      color: 'tertiary',
      title: "Knowledgebase",
      icon: "Setting",
      type: "link"
    },
    {
      level: 1,
      id: 34,
      path: "/support-ticket",
      color: 'secondary',
      title: "Support Ticket",
      icon: "Ticket",
      type: "link"
    },
  ]

  item = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
