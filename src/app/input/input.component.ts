import { Component} from '@angular/core';
import { ItemsService } from '../items.sevice';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  constructor(private itemsService:ItemsService){}

  onNewItem(reference: HTMLInputElement) {
    this.itemsService.addItem(reference.value)
    reference.value =''
  }
}
