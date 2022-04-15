import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input()
  idx: number = 0;
  @Input()
  book: any;

  constructor() { }

  ngOnInit(): void {
  }

}
