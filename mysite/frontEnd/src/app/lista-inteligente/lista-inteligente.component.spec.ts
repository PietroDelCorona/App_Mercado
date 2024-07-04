import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInteligenteComponent } from './lista-inteligente.component';

describe('ListaInteligenteComponent', () => {
  let component: ListaInteligenteComponent;
  let fixture: ComponentFixture<ListaInteligenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaInteligenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInteligenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
