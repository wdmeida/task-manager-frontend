import { Component, OnInit } from '@angular/core';

import { TaskService } from './shared/task.service';
import { Task } from './shared/task.model';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  providers: [ TaskService ]
})

export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public selectedTask: Task;

  public constructor(private taskService: TaskService) { }

  public ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}