import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsectionComponent } from './problemsection.component';

describe('ProblemsectionComponent', () => {
  let component: ProblemsectionComponent;
  let fixture: ComponentFixture<ProblemsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
