import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EURtoEGP'
})
export class EURtoEGPPipe implements PipeTransform {

  transform(price:number): number {
    return price * 42;
  }

}
