import { Component } from '@angular/core';
import { CircularDependencyComponent } from '../circular-dependency.component';

@Component({
  selector: 'lib-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor(circularDep: CircularDependencyComponent) {
    circularDep.ngOnInit();
  }
}
