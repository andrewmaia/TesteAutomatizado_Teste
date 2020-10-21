import { TestBed } from '@angular/core/testing';
import { Servico1 } from './servico1.service';
import { Servico2 } from './servico2.service';

describe('Modos de testar Serviços', () => {
    let servico1: Servico1;
    it('Instanciando Serviços de Forma Convencional', () => {
        /*No caso um serviço é injetado dentro do outro*/
        servico1 = new Servico1(new Servico2());
        expect(servico1.obter()).toBe('valor');
    });

    it('Instanciando o Serviço 2 com o Jasmine Spy', () => {
        const servico2Spy = jasmine.createSpyObj('Servico1', ['obter']);
        servico2Spy.obter.and.returnValue('valorFake');
        servico1 = new Servico1(servico2Spy);
        expect(servico1.obter()).toBe('valorFake');
    });

    it('Utilizando o TestBed para instanciar o Serviço 1 e o 2 de uma vez (Mais facil)', () => {
        TestBed.configureTestingModule({ providers: [Servico1] });
        servico1 = TestBed.get(Servico1);
        expect(servico1.obter()).toBe('valor');
    });

});
