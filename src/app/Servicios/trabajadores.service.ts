import { Injectable } from '@angular/core';
import { Trabajador } from '../Modelos/trabajadores';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  trabajadores: Trabajador[] = [
    {
      id: 1,
      nombre: 'Ana',
      cargo: 'Programadora',
      foto: '1.jpg',
      votos: 0
    },
    {
      id: 2,
      nombre: 'Elena',
      cargo: 'Administrativa',
      foto: '2.jpg',
      votos: 0
    },
    {
      id: 3,
      nombre: 'Juan',
      cargo: 'Analista',
      foto: '3.jpg',
      votos: 0
    },
    {
      id: 4,
      nombre: 'Luis',
      cargo: 'Programador',
      foto: '4.jpg',
      votos: 0
    },
    {
      id: 5,
      nombre: 'Maria',
      cargo: 'Diseñadora',
      foto: '5.jpg',
      votos: 0
    },
    {
      id: 6,
      nombre: 'Pedro',
      cargo: 'Marketing',
      foto: '6.jpg',
      votos: 0
    }
  ];

  constructor() { }

  getTrabajadores(){
    return this.trabajadores;
  }

  getTrabajador(id:number){
    let pos=this.trabajadores.findIndex(t=>t.id==id);
    return this.trabajadores[pos];
  }

  deleteTrabajador(id:number){
    let pos=this.trabajadores.findIndex(t=>t.id==id);
    this.trabajadores.splice(pos,1);
  }
}
