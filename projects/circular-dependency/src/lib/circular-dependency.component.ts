import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-circular-dependency',
  template: `
    <lib-child>
      circular-dependency works, NOT!
    </lib-child>
  `,
  styles: [
  ]
})
export class CircularDependencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
