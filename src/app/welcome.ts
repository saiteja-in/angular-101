import { Component } from "@angular/core";


@Component({
  selector: 'app-welcome',
  standalone: true,  // Required for modern Angular standalone components
  template: `
  <div class="welcome">
    <h2>Welcome to Angular!</h2>
    <p>This is your first component.</p>
  </div>
`,
  styles: [`
    .welcome {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  `]
})

export class WelcomeComponent{}
