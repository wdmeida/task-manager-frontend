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
    this.taskService.getTasks()
                    .then((tasks) => this.tasks = tasks)
                    .catch((error_msg) => console.log(error_msg));
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}