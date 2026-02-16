import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-navbar",
    imports: [RouterLink],
    template: `
    <nav class="nav-bar">
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
        <a routerLink="/contact">Contact</a>
    </nav>
    `,
    styles:``,
    changeDetection: ChangeDetectionStrategy.OnPush


})

export class AppNavBar {}