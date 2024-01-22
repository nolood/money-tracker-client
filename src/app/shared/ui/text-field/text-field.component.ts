import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextFieldLabelColor } from './text-field.interface';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
  ],
})
export class TextFieldComponent implements ControlValueAccessor {
  @Input() placeholder?: string;
  @Input() error?: string | null;
  @Input() label?: string;
  @Input() labelColor?: TextFieldLabelColor;
  @Input() type?: 'text' | 'password';
  @Output() focus = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();
  @ViewChild('input')
  input?: ElementRef;

  localType = this.type;
  value: string = '';

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onChange: any = () => {};

  updateValue() {
    this.onChange(this.value);
  }

  focusInput(e: Event) {
    e.stopPropagation();
    if (!this.isFocus) {
      this.input?.nativeElement.focus();
    }
  }

  onFocus() {
    this.isFocus = true;
    this.focus.emit();
  }

  onBlur() {
    this.isFocus = false;
    this.blur.emit();
  }

  changeLocalType() {
    if (this.localType === 'text') {
      this.localType = 'password';
    } else {
      this.localType = 'text';
    }
  }

  isFocus = false;
}
