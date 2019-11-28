import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { AccessoryComponent } from './accessory/accessory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdsidebarComponent } from './admin/adsidebar/adsidebar.component';
import { AdnavbarComponent } from './admin/adnavbar/adnavbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AccessoryComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    CartComponent,
    ProductpageComponent,
    AdminComponent,
    AdminProductComponent,
    AdsidebarComponent,
    AdnavbarComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
