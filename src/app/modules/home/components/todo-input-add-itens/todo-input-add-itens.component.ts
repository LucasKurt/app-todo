import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  @Output() public emitTask = new EventEmitter();
  public newTask: string = '';

  public submitTask() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }
}
