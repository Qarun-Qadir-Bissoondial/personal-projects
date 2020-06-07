import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separateCamelCase'
})
export class SeparateCamelCasePipe implements PipeTransform {

  transform(value: string): string {
    const split = value.split('');
    for (let i = 0; i < split.length; i++) {
      if (split[i].toUpperCase() === split[i]) {
        split.splice(i, 0, ' ');
        break;
      }
    }

    return split.join('');
  }

}
