import { Component, input, output } from "@angular/core";


interface User{
  id:number,
  name:string,
  email:string,
  avatar?:string
}

@Component({
  selector:'app-user-card',
  standalone:true,
  templateUrl:'./user-card.html',
  styleUrl:'./user-card.css'
})

export class UserCardComponent{
  user = input.required<User>();
  edit = output<User>();
  delete = output<number>();

  onEdit() {
    this.edit.emit(this.user());
  }

  onDelete() {
    this.delete.emit(this.user().id);
  }

}
