import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WaterReadingService } from '../service/water-reading.service';

@Component({
  selector: 'app-water-reading-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  templateUrl: './water-reading-form.component.html',
  styleUrl: './water-reading-form.component.scss'
})
export class WaterReadingFormComponent {
  flow: number;
  pressure: number;
  waterForm: FormGroup;
  formSubmitInProgress:boolean = false;
  @Output() readingSubmitted = new EventEmitter<Object>();

  constructor(private waterReadingService: WaterReadingService) {
    this.flow = 0;
    this.pressure = 0;
    this.waterForm = new FormGroup({
      flow: new FormControl('', [Validators.required, Validators.min(1)]),
      pressure: new FormControl('', [Validators.required,  Validators.min(1)])
    });  
  }

  saveWaterReadings(formDirective: FormGroupDirective) {
    this.formSubmitInProgress = true;
    this.waterForm.disable();
    this.waterReadingService.saveWaterReading(this.waterForm.getRawValue()).subscribe({
      next: (result) => {
        this.formSubmitInProgress = false;
        this.waterForm.reset();
        this.waterForm.enable();
        formDirective.resetForm();
        this.readingSubmitted.emit(result)
      },
      error: console.error // Error handling to show error message in UI can be implemented here   
    });
  }
}
