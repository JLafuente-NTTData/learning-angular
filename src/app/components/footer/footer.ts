import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <p>&copy; 2026 My App. All rights reserved.</p>
      <img
        height="30"
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png"
        alt="Logo de Angular"
      />
    </footer>
  `,
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooter {}
