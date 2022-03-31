import { Component } from '@angular/core';

@Component({
  selector: 'my-root',//should be in kebeb style
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location ="Coimbatore";

onBoxValueChange(paramData:any)
{
  console.log("app component:" + paramData.value);
}

}



// class AboutComponent{
  
// }