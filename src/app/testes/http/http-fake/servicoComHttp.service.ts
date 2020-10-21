import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ServicoComHttpService {
    constructor(public httpClient: HttpClient) { }

    obterComHttp(): Observable<any[]> {
        return this.httpClient.get<any[]>('');
    }
}

