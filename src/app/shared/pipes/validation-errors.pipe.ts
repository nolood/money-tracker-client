import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formValidationErrors',
})
export class FormValidationErrorsPipe implements PipeTransform {
  transform(value?: ValidationErrors | null): string | null {
    const validationErrors: { [key: string]: string } = {
      required: 'This field is required',
      email: 'Please enter a valid email',
    };

    if (!value) return null;

    return validationErrors[Object.keys(value)[0]];
  }
}
