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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,//automatically imported and automatically added hear
    AppHeaderComponent,
    BoxaComponent,
    CustomerFormComponent,
    EmployeeFormComponent,
    BookListComponent//this home component is added by =>ng g component home 
  ],//components ,directive ,pipes
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],//import other dependt module , other module used in the current module
  providers: [],//provide service to app root injector
  bootstrap: [AppComponent]//what is in he
})
export class AppModule { }
