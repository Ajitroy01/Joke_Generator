// src/app/task-item/task-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task = { id: 0, title: '', description: '', completed: false };
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();

  updateTask(updatedTask: Task): void {
    this.taskUpdated.emit(updatedTask);
  }

  deleteTask(taskToDelete: Task): void {
    this.taskDeleted.emit(taskToDelete);
  }
}
