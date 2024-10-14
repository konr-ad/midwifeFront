import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubConsultComponent } from './sub-consult.component';

describe('SubConsultComponent', () => {
  let component: SubConsultComponent;
  let fixture: ComponentFixture<SubConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubConsultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
