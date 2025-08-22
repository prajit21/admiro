import { Routes } from '@angular/router';












export const Ecommerce: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-products',
        loadComponent: () => import('./add-product/add-product').then(m => m.AddProduct),
        data: {
          title: "Add Products",
          breadcrumb: "Add Products",
        }
      },
      {
        path: 'products',
        loadComponent: () => import('./product/product').then(m => m.Product),
        data: {
          title: "Product",
          breadcrumb: "Product",
        }
      },
      {
        path: 'product-page',
        loadComponent: () => import('./product-page/product-page').then(m => m.ProductPage),
        data: {
          title: "Product Page",
          breadcrumb: "Product Page",
        }
      },
      {
        path: 'product-list',
        loadComponent: () => import('./product-list/product-list').then(m => m.ProductList),
        data: {
          title: "Product List",
          breadcrumb: "Product List",
        }
      },
      {
        path: 'payment-details',
        loadComponent: () => import('./payment-details/payment-details').then(m => m.PaymentDetails),
        data: {
          title: "Payment Details",
          breadcrumb: "Payment Details",
        }
      },
      {
        path: 'category-page',
        loadComponent: () => import('./category-page/category-page').then(m => m.CategoryPage),
        data: {
          title: "Category",
          breadcrumb: "Category",
        }
      },
      {
        path: 'order-history',
        loadComponent: () => import('./order-history/order-history').then(m => m.OrderHistory),
        data: {
          title: "Order History",
          breadcrumb: "Order History",
        }
      },
      {
        path: 'cart',
        loadComponent: () => import('./cart/cart').then(m => m.Cart),
        data: {
          title: "Cart",
          breadcrumb: "Cart",
        }
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./wishlist/wishlist').then(m => m.Wishlist),
        data: {
          title: "Wishlist",
          breadcrumb: "Wishlist",
        }
      },
      {
        path: 'checkout',
        loadComponent: () => import('./checkout/checkout').then(m => m.Checkout),
        data: {
          title: "Checkout",
          breadcrumb: "Checkout",
        }
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pricing/pricing').then(m => m.Pricing),
        data: {
          title: "Pricing",
          breadcrumb: "Pricing",
        }
      }
    ]
  }
]