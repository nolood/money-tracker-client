import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './text-field/text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';
import { StringPipe } from '../pipes/string.pipe';

@NgModule({
  declarations: [TextFieldComponent, StringPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TextFieldComponent],
})
export class UiModule {}
