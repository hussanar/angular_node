import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class FormComponent implements OnInit {
//   name: string;
//   empoloyeeID : number;
//   empList: Array<{name: string, empoloyeeID: number}> = []; 
//   constructor() {
//   }

// ngOnInit() {
//   }

// onEmpCreate(){
//    console.log(this.name,this.empoloyeeID);
//    this.empList.push.apply(this.name,this.empoloyeeID);
//    this.name ="";
//    this.empoloyeeID = 0;
//    }
// }
export class AppComponent {
  title = 'pcr-update';
  displayValue = "";
  getValue(val: string) {
    console.warn(val)
    this.displayValue = val;
  }
  userlist: any[] = []
  // constructor() {
  //   console.log(this.title)
  // }
  // Username: string = "Enter User Name"
  // onclick(prouser: any) {
  //   // this.userlist.push(prouser.value)
  //   console.log(prouser.value)
  //   prouser.value = ""
  // }
  // submit(item: string) {
  //   this.userlist.push({ id: this.userlists.lenght, name: item })
  //   console.log(this.userlist)
  //   console.log(this.userlist)
  // }
  
}
