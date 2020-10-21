import { Injectable } from '@angular/core';
import { Servico2 } from './servico2.service';


@Injectable({
  providedIn: 'root'
})


export class Servico1 {
  constructor(private servico2: Servico2) { }

  obter(): any {
      return this.servico2.obter();
  }
}

