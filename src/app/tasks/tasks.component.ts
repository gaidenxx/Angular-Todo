import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor(private tasksService : TasksService){}
  tasksList = [];

  // Get tasks url node
  ngOnInit(){
    this.tasksService.getTasks().subscribe( data =>
      {
        for (var key in data){
          this.tasksList.push(data[key]);
        }
      }
    );
  }

  // Add Task
  taskNameAdd = {
    name : ""
  };
    
  public addTask(){
    this.tasksService.createTask(this.taskNameAdd);
  }

  public removeTask(data){
    let taskNameRemove = {
      name : data
    }
    
    this.tasksService.deleteTask(taskNameRemove);
  }

  // Update Task
  // public editTask(){
  //   let taskInfos = {
  //     oldname : ,
  //     newname :
  //   }

  //   this.tasksService.updateTask(taskInfos);
  // }
}
