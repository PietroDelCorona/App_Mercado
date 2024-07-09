import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPorProdutoComponent } from './lista-por-produto.component';

describe('ListaPorProdutoComponent', () => {
  let component: ListaPorProdutoComponent;
  let fixture: ComponentFixture<ListaPorProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPorProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
