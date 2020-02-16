import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  complexedData = {
    id: 2,
    type: 1,
    person: {
      name: 'John Doe',
      age: 42
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
