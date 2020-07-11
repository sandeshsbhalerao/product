import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
     ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([                                    //declares the router directives, exposes the configured routes - How - we pass them by calling forRoot[] and passing them in into the Root
     
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch:'full' },
      { path: '**', redirectTo: 'weclome', pathMatch:'full' }
    
    ]),
    ProductModule                    
      ],
  bootstrap: [AppComponent]
})
export class AppModule { };
