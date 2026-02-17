import { Component, input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    @if (isLoading()) {
      <div class="spinner-overlay">
        <div class="spinner">
          <div class="circle"></div>
        </div>
      </div>
    }
  `,
  styleUrls: ['./spinner.css'],
})
export class SpinnerComponent {
  isLoading = input(false);
}
