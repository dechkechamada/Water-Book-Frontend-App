import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsChartComponent } from './readings-chart.component';

describe('ReadingsChartComponent', () => {
  let component: ReadingsChartComponent;
  let fixture: ComponentFixture<ReadingsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
