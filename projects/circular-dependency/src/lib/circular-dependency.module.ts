import { NgModule } from '@angular/core';
import { CircularDependencyComponent } from './circular-dependency.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    CircularDependencyComponent,
    ChildComponent
  ],
  imports: [
  ],
  exports: [
    CircularDependencyComponent
  ]
})
export class CircularDependencyModule { }
