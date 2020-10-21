import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-teste',
    template: `
      <input [(ngModel)]="textoInput" >
      <a>{{textoInput}}</a>
      `
  })
  export class TesteComponent implements OnInit {
    constructor() { }
    textoInput: string;
    ngOnInit() {
    }
  }