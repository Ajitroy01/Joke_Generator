import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(newTask: Task) {
    this.tasks.push(newTask);
  }

  updateTask(updatedTask: Task) {
    const existingTask = this.tasks.find((task) => task.id === updatedTask.id);

    if (existingTask) {
      existingTask.title = updatedTask.title;
      existingTask.description = updatedTask.description;
      existingTask.completed = updatedTask.completed;
      // You may want to call the task service to persist the changes here
    }
  }

  deleteTask(taskToDelete: Task) {
    const index = this.tasks.findIndex((task) => task.id === taskToDelete.id);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      // You may want to call the task service to delete the task here
    }
  }
}
