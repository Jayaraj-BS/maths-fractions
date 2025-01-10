import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionsVisualizationComponent } from './fractions-visualization.component';

describe('FractionsVisualizationComponent', () => {
  let component: FractionsVisualizationComponent;
  let fixture: ComponentFixture<FractionsVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FractionsVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FractionsVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
