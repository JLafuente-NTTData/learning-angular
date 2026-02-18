import { Component } from '@angular/core';
import { FormRegisterComponent } from '../../components/form-register/form-register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormRegisterComponent],
  template: `
    <div class="register-container">
      <h2>Registro de Usuario</h2>
      <app-form-register></app-form-register>
    </div>
  `,
  styleUrl: './register.css',
})
export class RegisterPage {}
