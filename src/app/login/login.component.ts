import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProcessingIndicatorComponent } from '../core/processing-indicator/processing-indicator.component';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const validLogin = {emailId: 'user@wb.com', password: 'test'};

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    MatFormFieldModule, 
    MatCardModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatDialogModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(private dialog: MatDialog, private router: Router ) {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  async validateLogin() {
    this.error = '';
    let dialogref = this.dialog.open(ProcessingIndicatorComponent, {    
      disableClose: true,
      panelClass: 'transparent',
    });
    try {
      await this.checkCredentials();
      dialogref.close();
      this.router.navigate(['/dashboard'])
    } catch (error) {
      dialogref.close();
      this.error = error as string;
    }
  }

  checkCredentials(): Promise<string> {
    let promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (JSON.stringify(this.loginForm.getRawValue()) === JSON.stringify(validLogin)) {
          resolve('success');
        } else {
          reject('Invalid Email or Password. Please try again');
        }
      }, 1500) // Add a delay of 1.5 second to mimic an async request to validate credentials
    });
    return promise;
  }
}
