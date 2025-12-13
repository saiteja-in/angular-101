import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome';
import { CounterComponent } from './counter';
import { GreetingComponent } from './greeting';
import { CustomButtonComponent } from './button';
import { ItemsComponent } from './fetchItems';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// @Component({
//   selector: 'app-my-component',
//   template:'<div>hey man</div>'
// })

export class App {
  protected readonly title = signal('wishlist');
}
