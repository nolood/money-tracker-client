import {
  Component,
  ElementRef,
  forwardRef,
  Input,
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
  @Input() error?: string;
  @Input() label?: string;
  @Input() labelColor?: TextFieldLabelColor;
  @Input() type?: 'text' | 'password';
  @ViewChild('input') input?: ElementRef;

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

  focus() {
    if (!this.isFocus) {
      this.input?.nativeElement.focus();
    }
  }

  isFocus = false;
}
