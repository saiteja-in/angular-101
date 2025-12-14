import { Component, computed, signal } from "@angular/core";


@Component({
  selector:'app-counter',
  standalone: true,
  template:`
    <div>
  <h3 >Counter:{{count()}}</h3>
  <h3 >Double Counter:{{doublecount()}}</h3>
  <h3 >Even Counter:{{evencount()}}</h3>

  <button (click)="increment()">+</button>
  <button (click)="decrement()">-</button>
  <button (click)="reset()">reset</button>
</div>
  `
})

export class CounterComponent {
  count =signal(0);
  doublecount=computed(()=>this.count()*2)
  evencount=computed(()=>this.count()%2===0)
  increment(){
    this.count.update(value=>value+1);
  }
  decrement(){
    this.count.update(value=>value-1)
  }
  reset(){
    this.count.set(0)
  }
}

