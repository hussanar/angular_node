
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators, AbstractControlOptions } from '@angular/forms';
import { rangeValidator, emailMatchValidator } from '../my-validator'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;
  empRecord: any = {
    irstName: 'Hussain',
    lastName: 'Abdul Hakkeem',
    email: 'hussanarash@gmail.com',
    mobile: 9384444077
  }

  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: '',
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]]
      }, { validators: emailMatchValidator }),
      mobile: [''],
      sendNotification: ['email'],
      range: ['', [rangeValidator(10, 20)]]
    });
  }

  ngOnInit(): void {

  }
  get firstName() { return this.employeeFormGroup.get('firstName')!; }
  // get email() { return this.employeeFormGroup.get('email')!; }//! --id defenetly return a value cant be null(or) undefined. null and undefined excluded.
  //if a is a type of string then a! ensure that it will return a string value,and not null  .or undefined
  get range() { return this.employeeFormGroup.get('range')!; }
  get emailGroup() { return this.employeeFormGroup.get('emailGroup')!; }
  get mobile() { return this.employeeFormGroup.get('mobile')!; }
  loadEmployee() {
    let data = {
      firstName: 'Hussain',
      lastName: 'abdul hakkeem'
    }
    this.employeeFormGroup.patchValue(data);
  }
  doNotification(msgtype: any) {
    if (msgtype === 'sms') {
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required, rangeValidator(8000000000, 9999999999)]);
      mobileControl?.updateValueAndValidity();
    }

  }

}//binding data with form.

