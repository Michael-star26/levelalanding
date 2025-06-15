import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneytizationComponent } from './moneytization.component';

describe('MoneytizationComponent', () => {
  let component: MoneytizationComponent;
  let fixture: ComponentFixture<MoneytizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneytizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneytizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
