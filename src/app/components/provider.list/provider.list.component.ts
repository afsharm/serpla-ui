import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-provider-list',
  standalone: true,
  imports: [],
  templateUrl: './provider.list.component.html',
  styleUrl: './provider.list.component.scss'
})
export class ProviderListComponent {
  @Output() onUpdate: EventEmitter<number> = new EventEmitter<number>();

  refreshList() {
  }
}
