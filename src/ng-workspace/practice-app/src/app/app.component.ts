import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-app';
  fname = 'hussain'
  lastName = 'abdul hakkeem'
  city = 'coimbatore'
  status!: boolean;
  posts: object;
  constructor() {
    console.log('constructor....');
    this.posts = [
      { title: 'post 1' },
      { title: 'post 2' },
      { title: 'post 3' },
      { title: 'post 4' },
      { title: 'post 5' }]
  }

}
//@component decorator make the class as a component, it contains the metadata,we need to import the component from node module.
//