import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { MatDialog} from "@angular/material/dialog";
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    private dialog: MatDialog) {

    }

  ngOnInit(): void {

  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  updateItem(): void {
    this.update.emit({
      item: this.item,
      changes: { title: "pizza" }
    });
  }





  openDialog() {
    this.dialog.open(TaskDialogComponent, {
      data: {
        name: this.item.title,
      },

    });
  }


}
