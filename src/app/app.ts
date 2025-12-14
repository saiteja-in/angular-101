import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo.component';
import { WelcomeComponent } from './welcome';
import { CounterComponent } from './counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CounterComponent],
  templateUrl: './app.html'
})

// @Component({
//   selector: 'app-my-component',
//   template:'<div>hey man</div>'
// })

export class App {
  protected readonly title = signal('wishlist');
  userName = signal('Angular Learner');
}
