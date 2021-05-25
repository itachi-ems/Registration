import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustom'
})
export class PipeCustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
