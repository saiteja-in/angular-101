import { Component, input } from "@angular/core";


@Component({
  selector: 'app-welcome',
  standalone: true,  // Required for modern Angular standalone components
  templateUrl:  './welcome.component.html'
})

export class WelcomeComponent{
  name = input.required<string>()
  message = input<string>("welcome to den")

  onButtonClick(){
    alert(`hello ${this.name()}`)
  }
}
