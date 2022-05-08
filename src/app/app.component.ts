import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDos';
  list: any []= [];
  addTask(Item: string){
    this.list.push({id:this.list.length, name:Item})
    console.warn(this.list)
  }

  deleteTAsk(id:number){
    console.warn(id)
    this.list=this.list.filter(Item => Item.id!==id)
  }
}
