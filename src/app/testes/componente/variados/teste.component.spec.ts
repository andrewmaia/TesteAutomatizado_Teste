import { TesteComponent } from './teste.component';

describe('Testes variados de componentes', () => {
    it('Teste chamando diretamente metodos que respondem a eventos ', () => {
      const comp = new TesteComponent();
      expect(comp.ligado).toBe(false, 'Desligado no Inicio');
      comp.clicked();
      expect(comp.ligado).toBe(true, 'Depois de um Click ligou');
      comp.clicked();
      expect(comp.ligado).toBe(false, 'Depois de dois cliques, volta a ficar desligado');
    });


  });
