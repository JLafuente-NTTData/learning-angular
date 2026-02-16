import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppNavBar } from "../../components/nav-bar/navbar";
import { AppFooter } from "../../components/footer/footer";

@Component({
    selector: "app-main-layout",
    imports: [RouterOutlet, AppNavBar, AppFooter],
    template:`
    <div class="main-layout">
        <app-navbar />

        <main>
            <router-outlet />
        </main>

        <app-footer />
    </div>    
    `, 
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppMainLayout {}