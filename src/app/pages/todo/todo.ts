import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'; 
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [DatePipe, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo implements OnInit {
  url = `${environment.apiUrl}/tasks`;
  newTask = {
    title: '',
    description: '',
    createdAt: Date.now(),
  };
  tasks: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks() {
    this.http.get(this.url).subscribe({
      next: (data: any) => {
        this.tasks = data;

        console.log(this.tasks);
      },
      error: (err) => console.log(err),
    });
  }
  addTask() {
    this.newTask.createdAt = Date.now();
    this.http.post(this.url, this.newTask).subscribe({
      next: (data: any) => {
        this.newTask = {
          title: '',
          description: '',
          createdAt: Date.now(),
        };
        this.getTasks();
      },
      error: (err) => console.log(err),
    });
  }
  deleteTask(id: string) {
    this.http.delete(`${this.url}/${id}`).subscribe({
      next: (data: any) => {
        console.log('deleted this task');
        this.getTasks();
      },
      error: (err) => console.log(err),
    });
  }
}
