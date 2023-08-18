import { Component, DoCheck } from '@angular/core';

//Interface
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public tasks: Array<Task> = [];

  ngDoCheck(): void {
    this.tasks.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public emittedTask(event: string): void {
    if (event.trim()) {
      this.tasks.push({ name: event, checked: false });
    }
  }

  public deleteTask(event: number): void {
    this.tasks.splice(event, 1);
  }

  public deleteAllTasks(): void {
    const confim = window.confirm('Você deseja realmente Deletar Tudo ?');

    if (confim) {
      this.tasks = [];
    }
  }

  public validateInput(event: string, index: number): void {
    if (!event) {
      const confirm = window.confirm("Task vazia, deseja Deletar");

      if(confirm) {
        this.deleteTask(index);
      }
    }
  }
}
