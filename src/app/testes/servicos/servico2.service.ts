import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class Servico2 {
  constructor() { }

  obter(): any {
    return 'valor';
  }
}

