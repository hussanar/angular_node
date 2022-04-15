import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: 'life-cycle.component.html',
  styles: ['h1{font-family:Lato}']
})
export class LifeCycleComponent implements OnInit, OnDestroy, OnChanges {
  isdisabled: boolean = false;//true mean not work
  innerText = " hi there its some thing something"
  clicked() {
    this.name = "abdul hakkeem";
  }
  // changeName(event: Event) {
  //   this.name = (<HTMLInputElement>event.target).value;
  // }
  //two waay data binding useing 
  //type casting <html input element>
  //$ event  is the every events fire a data the $ event holde the every data about the event .
  //property binding is used to bind the property hear to html
  //event binding used totake the data from the htnl to the ts file
  @Input()
  name = 'Angular';
  show = true;
  constructor() {
    console.log("lfce constructor work")
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
    console.log("ng on change")
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("noOnInit Work");
    console.log("OnDistroy works");
  }
  toggle() {
    this.show = !this.show;
    console.log("toggle")
  }
  name1() {

  }

}
