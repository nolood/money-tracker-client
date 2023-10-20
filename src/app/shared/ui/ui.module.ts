import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './text-field/text-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [TextFieldComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TextFieldComponent],
})
export class UiModule {}
