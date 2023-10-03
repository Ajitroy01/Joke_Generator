// src/app/todo-form/todo-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };

  @Output() taskAdded = new EventEmitter<Task>();

  addTask(taskForm: any): void {
    if (taskForm.valid) {
      this.taskAdded.emit(this.newTask);
      this.resetForm(taskForm);
    }
  }

  resetForm(taskForm: any): void {
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      completed: false,
    };
    taskForm.resetForm();
  }
}
