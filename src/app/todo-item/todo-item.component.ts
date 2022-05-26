import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Router } from '@angular/router';

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
    private dialog: MatDialog,
    public router: Router ) { }

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

  updateItem(data): void {
    this.update.emit({
      item: this.item,
      changes: { title: data }
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.data = {
      item: this.item
    };

    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(TaskDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
        data => this.updateItem(data.description)
    );
    };
  }
}
