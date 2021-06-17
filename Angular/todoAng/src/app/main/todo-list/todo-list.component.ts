import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoText:string|undefined = undefined;
  todoList:string[]=['hi'];

  ngOnInit (): void {
  }

  addNewTask (todo:string):void {
    this.todoList.push(todo)
  }

  deleteTask (todo:string | any):void {
    this.todoList = this.todoList.filter(task => task !== todo)
    console.log(todo)
  }
}
