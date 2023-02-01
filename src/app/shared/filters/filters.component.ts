import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  @Output() status = new EventEmitter();

  selectedStatus(status: string): void {
    this.status.emit(status);
  }
}
