import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TesteService {
  constructor() { }
  obter(): string {
    return 'ValorServico';
  }
}




