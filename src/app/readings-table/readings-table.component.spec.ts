import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsTableComponent } from './readings-table.component';

describe('ReadingsTableComponent', () => {
  let component: ReadingsTableComponent;
  let fixture: ComponentFixture<ReadingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
