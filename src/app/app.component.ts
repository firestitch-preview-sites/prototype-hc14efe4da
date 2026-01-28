import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <nav>
        <a routerLink="/">Home</a> | 
        <a routerLink="/account">Account</a>
      </nav>
      <router-outlet></router-outlet>
      <div *ngIf="!hasRouterOutlet()">
        <h1>Preview Site</h1>
      </div>
    </div>
  `,
  styles: [`
    nav { 
      margin: 20px; 
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
    nav a { 
      text-decoration: none; 
      color: #007bff;
      margin-right: 10px;
    }
    nav a:hover { text-decoration: underline; }
    h1 { margin: 20px; }
  `],
})
export class AppComponent {
  hasRouterOutlet() {
    return window.location.pathname !== '/';
  }
}