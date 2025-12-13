import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-items',
  template: `
    <div>
      @for (item of dataService.data(); track item.id) {
        <div>{{ item.name }}</div>
      }
    </div>
  `
})
export class ItemsComponent {
  dataService = inject(DataService);

  ngOnInit() {
    this.dataService.fetchData();
  }
}
