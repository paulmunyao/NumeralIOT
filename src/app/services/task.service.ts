import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) {}

  getTasks(): Task[] {
    return TASKS;
  }
}
