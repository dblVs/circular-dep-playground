import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-translation',
  template: `
    <bob-component>
      translation works!
    </bob-component>
  `,
  styles: [
  ]
})
export class TranslationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
