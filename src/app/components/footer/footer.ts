import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-footer",
    imports: [],
    template: `
        <footer class="footer">
            <p>&copy; 2026 My App. All rights reserved.</p>
        </footer>
    `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppFooter {}