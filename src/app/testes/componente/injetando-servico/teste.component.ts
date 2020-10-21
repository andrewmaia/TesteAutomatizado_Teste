import { Component, OnInit } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
    selector: 'app-teste',
    template: `<p>Componente</p>`
  })
  export class TesteComponent implements OnInit {
    valorServico: string;
    constructor(private service: TesteService) { }
    ngOnInit() {
      this.valorServico = this.service.obter();
    }
  }