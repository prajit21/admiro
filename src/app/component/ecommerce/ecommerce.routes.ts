import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PricingComponent } from './pricing/pricing.component';
import { CategoryPageComponent } from './category-page/category-page.component';

export const Ecommerce: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-products',
        component: AddProductComponent,
        data: {
          title: "Add Products",
          breadcrumb: "Add Products",
        }
      },
      {
        path: 'products',
        component: ProductComponent,
        data: {
          title: "Product",
          breadcrumb: "Product",
        }
      },
      {
        path: 'product-page',
        component: ProductPageComponent,
        data: {
          title: "Product Page",
          breadcrumb: "Product Page",
        }
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        data: {
          title: "Product List",
          breadcrumb: "Product List",
        }
      },
      {
        path: 'payment-details',
        component: PaymentDetailsComponent,
        data: {
          title: "Payment Details",
          breadcrumb: "Payment Details",
        }
      },
      {
        path: 'category-page',
        component: CategoryPageComponent,
        data: {
          title: "Category",
          breadcrumb: "Category",
        }
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent,
        data: {
          title: "Order History",
          breadcrumb: "Order History",
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: "Cart",
          breadcrumb: "Cart",
        }
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        data: {
          title: "Wishlist",
          breadcrumb: "Wishlist",
        }
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          title: "Checkout",
          breadcrumb: "Checkout",
        }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: {
          title: "Pricing",
          breadcrumb: "Pricing",
        }
      }
    ]
  }
]