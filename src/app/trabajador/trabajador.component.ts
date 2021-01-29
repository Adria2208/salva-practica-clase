import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from '../Modelos/trabajadores';
import { TrabajadoresService } from '../Servicios/trabajadores.service';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {


  trabajador:Trabajador;

  constructor(private rutaActiva:ActivatedRoute,
              private servicioTrabajadores:TrabajadoresService,
              private miRouter:Router) { }

  ngOnInit(): void {
    let id=this.rutaActiva.snapshot.params.id;
    this.trabajador=this.servicioTrabajadores.getTrabajador(id);
  }

  borrarTrabajador(id:number){
    this.servicioTrabajadores.deleteTrabajador(id);
    this.miRouter.navigate(["/trabajadores"]);
  }
}
