import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-provider-edit',
  standalone: true,
  imports: [],
  templateUrl: './provider.edit.component.html',
  styleUrl: './provider.edit.component.scss'
})
export class ProviderEditComponent {

  @Output() onCancel = new EventEmitter();
  @Output() onSubmitted = new EventEmitter();
  @Input() providerId!: number;

}
