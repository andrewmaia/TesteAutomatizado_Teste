import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TesteService {

  obter(): string {
      return 'ValorServico';
  }
}

