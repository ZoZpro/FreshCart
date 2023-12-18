import { authGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifiedCodeComponent } from './verified-code/verified-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
  
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent,canActivate:[authGuard] },
  {path:'about', component:AboutComponent,canActivate:[authGuard]},
  {path:'categories', component:CategoriesComponent, canActivate:[authGuard]},
  {path:'products', component:ProductsComponent, canActivate:[authGuard]},
  {path:'productDetails/:id', component:ProductDetailsComponent,canActivate:[authGuard] },
  {path:'slider', component:SliderComponent,canActivate:[authGuard] },
  {path:'cart', component:CartComponent, canActivate:[authGuard]},
  {path:'wishlist', component:WishlistComponent, canActivate:[authGuard]},
  {path:'checkout/:cartId', component:CheckoutComponent, canActivate:[authGuard]},
  {path:'brands', component:BrandsComponent, canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forget-password', component:ForgetPasswordComponent, },
  {path:'verifiedCodeing', component:VerifiedCodeComponent, },
  {path:'reset-password', component:ResetPasswordComponent, },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
