import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhynowComponent } from './whynow.component';

describe('WhynowComponent', () => {
  let component: WhynowComponent;
  let fixture: ComponentFixture<WhynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhynowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
