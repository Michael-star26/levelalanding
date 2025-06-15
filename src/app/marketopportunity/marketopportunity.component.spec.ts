import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketopportunityComponent } from './marketopportunity.component';

describe('MarketopportunityComponent', () => {
  let component: MarketopportunityComponent;
  let fixture: ComponentFixture<MarketopportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketopportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketopportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
