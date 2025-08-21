import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  constructor(private http: HttpClient) {}

  // Url's services node
  private urlTasks = '//localhost:3000/listaTask';
  private urlTasksAdd = '//localhost:3000/criarTask';
  private urlTasksExclude = '//localhost:3000/deletarTask';

  // Header Node Service
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Simple request of all tasks on mysql
  getTasks() {
    return this.http.get(this.urlTasks)
  }

  // Create and delete a task on mysql
  createTask(data) {
    this.http.post(this.urlTasksAdd, data, this.httpOptions).subscribe(
      data => {
        console.log("success", location.reload(true));
      },
      error => {
        console.log("Error", error);
      }
    )
  }

  deleteTask(data) {
    this.http.post(this.urlTasksExclude, data, this.httpOptions).subscribe(
      data => {
        console.log("success", location.reload(true));
      },
      error => {
        console.log("Error", error);
      }
    )
  }
}
