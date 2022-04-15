import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spt',
  templateUrl: './spt.component.html',
  styleUrls: ['./spt.component.css']
})
export class SptComponent implements OnInit {
  title = "emloyee  details"
  public employees = [
    { "id": 1, "name": "hussain", 'age': 20 },
    { "id": 1, "name": "hassain", 'age': 20 },
    { "id": 1, "name": "abdul rahman", 'age': 20 },
    { "id": 1, "name": "balaji", 'age': 20 }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
