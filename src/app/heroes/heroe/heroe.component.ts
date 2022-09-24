import {Component} from '@angular/core'


@Component({
    selector: 'app-heroe',
    templateUrl:  'heroe.component.html'
})
export class HeroeComponent{

nombre  : string = 'Ironman';
edad    : number = 20;

get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
}

obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`; //template literal(construir string)... concatenar
}

cambiarNombre(nom :string): void{
this.nombre = nom;
}

cambiarEdad(ed :number): void{
    this.edad = ed;
    }


}