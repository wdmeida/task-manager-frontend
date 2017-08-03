import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de Tarefas';
  
  task: Task = {
    id: 1,
    title: 'Jogo dos Dallas Cowboys hoje as 21:00'
  };

  task2: Task = new Task(2, 'O lá em casa...');
}

export class Task {
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}