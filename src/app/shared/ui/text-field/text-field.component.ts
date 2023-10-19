import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent {
  @Input() placeholder?: string;
  @Input() error?: string;
  @ViewChild('input') input?: ElementRef;

  value: string = '';

  focus() {
    if (!this.isFocus) {
      this.input?.nativeElement.focus();
    }
  }

  isFocus = false;
}
