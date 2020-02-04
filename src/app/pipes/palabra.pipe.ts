import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'palabra'})
export class PalabraPipe implements PipeTransform {
    transform(value: any): any {
        return 'hola mundo';
    }
}