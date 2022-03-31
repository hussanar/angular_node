import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerModel: any;
  constructor() { console.log("customer form is loaded") }

  ngOnInit(): void {
    this.customerModel = {
      firstName: 'steve',
      lastName: 'jobs',
      email: 'steve.Jobs@goodplace.com'
    }
  }
  saveCustomer(CustomerFormGroup: any) {
    if (CustomerFormGroup.valid) {
      console.log(CustomerFormGroup.value)
    }
  }


}
