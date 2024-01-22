import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string',
})
export class StringPipe implements PipeTransform {
  transform(value: unknown): string {
    return String(value);
  }
}
