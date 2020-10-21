import { defer } from 'rxjs';
import { ServicoComHttpService } from './servicoComHttp.service';

describe('O teste irá criar um Spy que irá substituir o http injetado no serviço', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: ServicoComHttpService;

    beforeEach(() => {
        /*Cria  o spy que será o HTTP Fake*/
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        /*Cria  o serviço injetando o HTTP Fake*/
        service = new ServicoComHttpService(httpClientSpy as any);
    });

    it('Simulando HTTP Get', () => {
        const retornoFake: any[] = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
        httpClientSpy.get.and.returnValue(asyncData(retornoFake));

        service.obterComHttp().subscribe(
          array => expect(array).toEqual(retornoFake, 'Retorno esperado Http'),
          fail /*Mesmo que não for fazer tratamento de erro tem sempre que declarar o fail pois se não da problema no teste*/
        );

      });

    /*Função auxiliar para teste*/
    function asyncData<T>(data: T) {
        return defer(() => Promise.resolve(data));
    }

});
