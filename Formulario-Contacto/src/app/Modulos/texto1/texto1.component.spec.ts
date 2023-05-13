import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texto1Component } from './texto1.component';

describe('Texto1Component', () => {
  let component: Texto1Component;
  let fixture: ComponentFixture<Texto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Texto1Component]
    });
    fixture = TestBed.createComponent(Texto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
