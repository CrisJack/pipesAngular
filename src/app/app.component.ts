import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string = "Cristhian";
  apellido:string ="LÓPEZ";

  numeros:any [] = [2,3,8,4,5,10,9];
  decimal = 3.2458;
  porcentaje = 0.35623;
  dinero = 50;
  fecha= new Date();
  ejemplo = "sajndjsand";
  ejemploJson = [
    {nombre:'Luz',edad:32, dir:"El Rimac"},
    {nombre:'Jack',edad:39, dir:"La Molina"},
    {nombre:'Marco',edad:22, dir:"San Miguel"},
  ]

 cambio:boolean = true;

  prueba = "Esto es Una Prueba";

}
