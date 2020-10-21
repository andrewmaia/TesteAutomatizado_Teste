import { TesteComponent } from './teste.component';

describe('Teste de Evento', () => {
    it('Componente deve disparar evento', () => {
      const comp = new TesteComponent();
      comp.evento.subscribe(numero => expect(numero).toBe(1));
      comp.clicked();
    });
  });
