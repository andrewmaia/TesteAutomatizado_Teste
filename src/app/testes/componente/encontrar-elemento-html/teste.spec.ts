import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TesteComponent } from './teste.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Encontrando elemento no Html do Componente', () => {
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ TesteComponent ]
      })
    fixture = TestBed.createComponent(TesteComponent);
  });

  it('Encontrando um determinado elemento através da classe', () => {
      const span  = fixture.debugElement.query(By.css('.span'));
      expect(span).toBeDefined();
  });
});



