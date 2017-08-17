import { Component, OnInit } from '@angular/core';

import { TaskService } from './shared/task.service';
import { Task } from './shared/task.model';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public newTask: Task;

  public constructor(private taskService: TaskService) { 
    this.newTask = new Task(null, '');
  }

  public ngOnInit() {
    this.taskService.getTasks()
                    .subscribe(
                      tasks => this.tasks = tasks,
                      error => alert("Ocorreu um erro no servidor, tente mais tarde.")
                    );
  }

  public createTask() {
    this.newTask.title = this.newTask.title.trim();

    if (!this.newTask.title) {
      alert('A tarefa deve ter um título.');
    } else {
      this.taskService.createTask(this.newTask)
        .subscribe(
          (task) => {
            this.tasks.push(task);
            this.newTask = new Task(null, '');
          },
          () => alert("Ocorreu um erro no servidor, tente mais tarde.")
        )
    }
  }
}