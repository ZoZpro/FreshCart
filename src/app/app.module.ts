import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifiedCodeComponent } from './verified-code/verified-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    SliderComponent,
    ProductsComponent,
    ProductDetailsComponent,
    MainsliderComponent,
    SeemorePipe,
    SearchPipe,
    CheckoutComponent,
    WishlistComponent,
    ForgetPasswordComponent,
    VerifiedCodeComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
