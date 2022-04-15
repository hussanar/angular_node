import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { BookCatlogComponent } from './book-catlog/book-catlog.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { BookformComponent } from './bookform/bookform.component';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'books', component: BookCatlogComponent },
  { path: 'form', component: BookformComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,//automatically imported and automatically added hear
    AppHeaderComponent,
    BoxaComponent,
    CustomerFormComponent,
    EmployeeFormComponent,
    BookListComponent,
    PriceDiscountPipe,
    BookCatlogComponent,
    MenuComponent,
    NewsComponent,
    BookformComponent,
    BookComponent,
    TabComponent
    //this home component is added by =>ng g component home 
  ],//components ,directive ,pipes
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],//import other dependt module , other module used in the current module
  providers: [],//provide service to app root injector
  bootstrap: [AppComponent]//what is in he
})
export class AppModule { }
