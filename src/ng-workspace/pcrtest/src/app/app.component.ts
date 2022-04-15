import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pcrtest';
  displayValue = "";
  getValue(val: string) {
    console.warn(val)
    this.displayValue = val;
  }
  getValue1(val: string) {
    console.warn(val)
    this.displayValue = val;
  }
  getValue2(val: string) {
    console.warn(val)
    this.displayValue = val;
  }
  getValue3(val: string) {
    console.warn(val)
    this.displayValue = val;
  }
  submit() {
    console.log("form is submited")
  }
  personname() {
    console.log("hi there")
  }
  aadharno() {
    console.log("hi there")
  }
  dob() {
    console.log("hi there")
  }
  cityname() {
    console.log("hi there")
  }
  dateoftest() {
    console.log("hi there")
  }
  checkform() {
    console.log("hi there")
  }
  reportno() {
    console.log("hi there")
  }
  labname() {
    console.log("hi there")
  }
  timeoftest() {
    console.log("hi there")
  }
}
//inject seprate values to the table .
//add the new row in table 
//array la vanganum 
//serch function build pannanum