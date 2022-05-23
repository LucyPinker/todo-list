import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { TodoListService } from '../services/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';


@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {


  form: FormGroup;
  description: string;

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private todoListService: TodoListService,
    @Inject(MAT_DIALOG_DATA) data) {

    }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []],
    });
  }

  close() {
    this.dialogRef.close();
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }

  updateItem( title: string, changes ): void {
    this.todoListService.updateItem({ title }, changes)
  }

  save() {
    this.dialogRef.close(this.form.value);
  }


}
