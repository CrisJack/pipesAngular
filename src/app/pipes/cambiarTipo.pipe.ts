import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cambiarTipo'})
export class CambiarTipoPipe implements PipeTransform {
    transform(value: any, cambio): any {
         
        
        if(cambio === false){
            return '*********';
        }else{
            return value;
        }

    }
}