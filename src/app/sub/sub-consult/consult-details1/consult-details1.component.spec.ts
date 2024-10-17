import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDetails1Component } from './consult-details1.component';

describe('ConsultDetails1Component', () => {
  let component: ConsultDetails1Component;
  let fixture: ComponentFixture<ConsultDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultDetails1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
