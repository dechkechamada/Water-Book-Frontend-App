import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterReadingFormComponent } from './water-reading-form.component';

describe('WaterReadingFormComponent', () => {
  let component: WaterReadingFormComponent;
  let fixture: ComponentFixture<WaterReadingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterReadingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterReadingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
