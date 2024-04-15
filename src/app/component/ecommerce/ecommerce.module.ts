import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgxSliderModule } from 'ngx-slider-v2';
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { EcommerceRoutingModule } from './ecommerce-routing.module';

import { ProductComponent } from './product/product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { FilterComponent } from './product/filter/filter.component';
import { ProductBoxComponent } from './product/product-box/product-box.component';
import { QuickViewComponent } from './product/quick-view/quick-view.component';
import { BrandComponent } from './product-page/brand/brand.component';
import { DescriptionTabComponent } from './product-page/description-tab/description-tab.component';
import { DetailsComponent } from './product-page/details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CreditCardComponent } from './payment-details/credit-card/credit-card.component';
import { DebitCardComponent } from './payment-details/debit-card/debit-card.component';
import { CodComponent } from './payment-details/cod/cod.component';
import { EmiComponent } from './payment-details/emi/emi.component';
import { NetBankingComponent } from './payment-details/net-banking/net-banking.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DatatableOrderHistoryComponent } from './order-history/datatable-order-history/datatable-order-history.component';
import { OrdersDataComponent } from './order-history/orders-data/orders-data.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PricingComponent } from './pricing/pricing.component';
import { BillingDetailsComponent } from './checkout/billing-details/billing-details.component';
import { BecomeMemberComponent } from './pricing/become-member/become-member.component';
import { SimplePricingCardComponent } from './pricing/simple-pricing-card/simple-pricing-card.component';

import { ProductListService } from '../../shared/services/ecommerce/product-list.service';
import { OrderService } from '../../shared/services/ecommerce/order.service';

import { ProductListDirective } from '../../shared/directives/product-list.directive';
import { OrderdataTableDirective } from '../../shared/directives/orderdata.directive';
import { CategoriesDirective } from '../../shared/directives/categories-page.directive';
import { CategoriesService } from '../../shared/services/ecommerce/categories-page.service';
import { TopSectionComponent } from './product-list/top-section/top-section.component';
import { ProductlistDatatableComponent } from './product-list/productlist-datatable/productlist-datatable.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CategoryDataTableComponent } from './category-page/category-data-table/category-data-table.component';
import { AddProductsDetailsComponent } from './add-product/add-products-details/add-products-details.component';
import { AdditionalOptionsComponent } from './add-product/advance/additional-options/additional-options.component';
import { AdvanceComponent } from './add-product/advance/advance.component';
import { InventoryComponent } from './add-product/advance/inventory/inventory.component';
import { ShippingComponent } from './add-product/advance/shipping/shipping.component';
import { ProductsCategoriesComponent } from './add-product/products-categories/products-categories.component';
import { ProductsFormStepeComponent } from './add-product/products-form-stepe/products-form-stepe.component';
import { ProductsGalleryComponent } from './add-product/products-gallery/products-gallery.component';
import { SellingPriceComponent } from './add-product/selling-price/selling-price.component';
import { NewCategoiesComponent } from './add-product/products-categories/new-categoies/new-categoies.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductPageComponent,
    FilterComponent,
    ProductBoxComponent,
    QuickViewComponent,
    BrandComponent,
    DescriptionTabComponent,
    DetailsComponent,
    AddProductComponent,
    ProductListComponent,
    PaymentDetailsComponent,
    ProductListDirective,
    CreditCardComponent,
    DebitCardComponent,
    CodComponent,
    EmiComponent,
    NetBankingComponent,
    OrderHistoryComponent,
    DatatableOrderHistoryComponent,
    OrdersDataComponent,
    OrderdataTableDirective,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    PricingComponent,
    BillingDetailsComponent,
    BecomeMemberComponent,
    SimplePricingCardComponent,
    TopSectionComponent,
    ProductlistDatatableComponent,
    CategoryPageComponent,
    CategoryDataTableComponent,
    CategoriesDirective,
    AddProductsDetailsComponent,
    AdditionalOptionsComponent,
    AdvanceComponent,
    InventoryComponent,
    ShippingComponent,
    ProductsCategoriesComponent,
    ProductsFormStepeComponent,
    ProductsGalleryComponent,
    SellingPriceComponent,
    NewCategoiesComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule,
    NgxPrintModule,
    GalleryModule,
    TagInputModule,
    BarRatingModule,
    NgxSliderModule,
    CarouselModule,
    AngularEditorModule,
    FormsModule,
    DropzoneModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers : [
    DecimalPipe, OrderService,ProductListService ,CategoriesService
 ]
})
export class EcommerceModule { }
