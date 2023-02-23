import { Component } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
})
export class ManagerComponent {
  
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
