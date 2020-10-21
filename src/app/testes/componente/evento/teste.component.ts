import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-teste',
    template: `
      <button (click)="clicked()">Dispara Evento</button>
      <span>{{message}}</span>`
  })
  export class TesteComponent {
    @Output() evento = new EventEmitter<number>();
    constructor() { }

    clicked() { this.evento.emit(1); }
  }