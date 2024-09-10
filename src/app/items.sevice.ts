import { Injectable } from "@angular/core";
import { Item } from "./item.model";


@Injectable ({providedIn:'root'})
export class ItemsService {

    items :Item[] = [
        {description:'ვუყურო ფილმს', done: false},
        {description:'გავასეირნო ძაღლი', done: true},
        {description:'ვისწავლო ანგულარი', done: false},
        {description:'მივიღო საკვები', done: true},
        {description:'დავლიო მინიმუმ 2 ლიტრი წყალი', done: false},
      ]
       saveItems(){
        localStorage.setItem('todos',JSON.stringify(this.items))
        console.log(localStorage.getItem('todos'));
        
      }
      getItems(){
        const todoItems = localStorage.getItem('todos')
        if(todoItems){
            this.items= JSON.parse(todoItems)
        }
        return this.items
      }

      addItem(newItemDesc : string){
        this.items?.unshift ({description:newItemDesc,done:false})
        this.saveItems()
      }
      deleteItem(index:number){
        this.items.splice(index,1)
        this.saveItems()
      }
      finishItem(index:number){
        this.items[index].done= !this.items[index].done
        this.saveItems()
      }
}

