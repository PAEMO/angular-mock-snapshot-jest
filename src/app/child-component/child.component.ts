import {Component, Input, OnInit} from '@angular/core';
import {DependencyChildService} from '../dependency-child.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;

  constructor(public serviceDependencyChild: DependencyChildService) {
  }

  ngOnInit(): void {
  }

}
