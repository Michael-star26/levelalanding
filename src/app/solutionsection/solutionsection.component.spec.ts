import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsectionComponent } from './solutionsection.component';

describe('SolutionsectionComponent', () => {
  let component: SolutionsectionComponent;
  let fixture: ComponentFixture<SolutionsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
