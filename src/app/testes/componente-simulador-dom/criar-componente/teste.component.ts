import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-teste',
    template: `
      <p>Componente</p>
      `
  })
  export class TesteComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
  }