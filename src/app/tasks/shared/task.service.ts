import { Injectable } from '@angular/core';

import { Task } from './task.model';

const TASKS: Task[] = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },
  { id: 6, title: 'Fazer tarefa 6' },
  { id: 7, title: 'Fazer tarefa 7' }
];

@Injectable()

export class TaskService {
  
  public getTasks(): Task[] { 
    return TASKS; 
  }
}