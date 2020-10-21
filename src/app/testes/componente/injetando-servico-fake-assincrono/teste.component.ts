import { Component, OnInit } from '@angular/core';
import { ServicoOriginal } from './servicoOriginal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teste',
  template: `
            <p class="retorno"><i>{{retorno | async}}</i></p>
            <button (click)="obter()">Testar</button>
            `
})
export class TesteComponent   {
  mensagem: string;


  constructor(private servico: ServicoOriginal) { }
    retorno: Observable<string>;

  obter() {
    this.retorno = this.servico.obter();
  }
}