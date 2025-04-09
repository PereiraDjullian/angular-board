import { Component } from '@angular/core';
import { Task } from './task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-board',
  imports: [FormsModule,CommonModule],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent {
  
  task:string="";  
  taskDescription:string = "";
  listTasks:Task[]=[]; 




  addTask(){
    let taskItem =  new Task();

    taskItem.title =  this.task;
    
    taskItem.description = this.taskDescription;

    taskItem.id = this.listTasks.length +1;

    this.listTasks.push(taskItem);

    this.task = "";
  }

  scratchTask(taskItem : Task){
    taskItem.status = !taskItem.status;

  }

  clearTasks(){
   this.listTasks = [];
  }
}
