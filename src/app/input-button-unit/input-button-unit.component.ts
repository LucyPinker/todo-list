import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = ''

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }


}

//on click, use the id of the list item to populate the dialog box with the title
//on update save the new title
