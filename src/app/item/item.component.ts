import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Item } from '../item.model';
import { ItemsService } from '../items.sevice';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input() item: Item | undefined;
  @Input() itemIndex:any
  constructor( private itemsService:ItemsService){}

  onDeleteItem(){
    this.itemsService.deleteItem(this.itemIndex)
  }
  onItemDone(){
    this.itemsService.finishItem(this.itemIndex)
  }
}
