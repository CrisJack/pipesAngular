import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cambiarTipo'})
export class CambiarTipoPipe implements PipeTransform {
    transform(value: any, cambio): any {
         
        
        if(cambio === false){
            let text:string="";
            for(let i=0; i<value.length;i++){
                text+="*";
            }
            return text;
        }else{
            return value;
        }

    }
}