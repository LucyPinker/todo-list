import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];


  constructor(
    private todoListService: TodoListService,
    private dialog: MatDialog,
    public router: Router) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }

  removeItem(item): void {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes): void {
    this.todoListService.updateItem(item, changes);
  }

  completeItems() {
    return this.todoList.filter(item => item.completed === true).length
  }



  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;


     dialogConfig.position = {
      'top': '0',
      left: '0'
    };

    if(this.dialog.openDialogs.length==0){
      this.dialog.open(TaskDialogComponent, dialogConfig);
    // disableClose: true
    };

  }



}
