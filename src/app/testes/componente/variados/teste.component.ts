import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-teste',
    template: `
      <button (click)="clicked()">Liga/Desliga</button>
      <span>{{message}}</span>`
  })
  export class TesteComponent {
    constructor() { }

    ligado = false;
    clicked()  { this.ligado = !this.ligado; }
    get message() { return `A luz está ${this.ligado ? 'Ligada' : 'Desligada'}`; }
  }