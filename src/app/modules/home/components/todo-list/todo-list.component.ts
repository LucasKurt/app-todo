import { Component } from '@angular/core';

//Interface
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public tasks: Array<Task> = [
    {name: "Minha nova task 1", checked: true},
    {name: "Minha nova task 2", checked: false},
  ];

  public deleteTask(event: number): void {
    this.tasks.splice(event, 1);
  }

  public deleteAllTasks(): void {
    const confim = window.confirm("Você deseja realmente Deletar Tudo ?");

    if (confim) {
      this.tasks = [];
    }
  }
}
