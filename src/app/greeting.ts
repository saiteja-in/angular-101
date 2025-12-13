import { Component, input } from "@angular/core";

@Component({
  selector:"app-greeting",
  standalone:true,
  template:`
  <div>
  <h2>Hello, {{ name() }}!</h2>
      <p>You are {{ age() }} years old.</p>
  </div>

  `
})

export class GreetingComponent{
  name=input.required<string>();
  age=input<number>(0);
}
