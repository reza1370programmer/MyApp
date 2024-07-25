import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  standalone: true
})
export class MypipePipe implements PipeTransform {

  transform(value: string[], len: number): string[] {
    return value.filter(element => element.length >= len)
  }

}
