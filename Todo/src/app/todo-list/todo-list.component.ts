// src/app/todo-list/todo-list.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();
  editedTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
  }

  editTask(task: Task): void {
    this.editedTask = task;
  }

  saveEditedTask(): void {
    if (this.editedTask) {
      this.taskService.updateTask(this.editedTask);
      this.editedTask = null;
    }
  }

  cancelEdit(): void {
    this.editedTask = null;
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  onTaskAdded(newTask: Task): void {
    this.tasks.push(newTask);
  }
}
