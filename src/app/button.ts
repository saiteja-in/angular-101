import { Component, output } from "@angular/core";

@Component({
  selector:'app-custom-button',
  standalone: true,
  template:`
   <button (click)="handleClick()">
      <ng-content></ng-content>
    </button>
  `
})

export class CustomButtonComponent{
  clicked=output<string>();
  handleClick(){
    this.clicked.emit('button was clicked')
  }

}
