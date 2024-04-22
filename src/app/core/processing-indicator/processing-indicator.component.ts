import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-processing-indicator',
  standalone: true,
  imports: [ MatProgressSpinnerModule ],
  templateUrl: './processing-indicator.component.html',
  styleUrl: './processing-indicator.component.scss'
})
export class ProcessingIndicatorComponent {

}
