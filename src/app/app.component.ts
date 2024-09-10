import { Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './item.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ItemComponent } from "./item/item.component";
import { InputComponent } from "./input/input.component";
import { ItemsService } from './items.sevice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ItemComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  constructor(private itemsService: ItemsService, @Inject(PLATFORM_ID) private platformId: Object) {}  
  items: Item[] | undefined;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.items = this.itemsService.getItems();
  }
}}
