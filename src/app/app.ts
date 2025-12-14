import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent],
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
