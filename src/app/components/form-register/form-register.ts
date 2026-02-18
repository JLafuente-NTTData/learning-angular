import { Component } from '@angular/core';
// import { User } from '../../services/users';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrl: './form-register.css',
  template: `
    <div class="form-container">
      <h3>Formulario de Registro</h3>
      <form>
            <label for="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username" required>
            Favorite Color: <input type="text" [formControl]="favoriteColorControl">
        </form>
    </div>
  `,
})
export class FormRegisterComponent {
  favoriteColorControl = new FormControl('');
}
