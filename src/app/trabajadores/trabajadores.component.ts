import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../Modelos/trabajadores';
import { TrabajadoresService } from '../Servicios/trabajadores.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  trabajadores:Array<Trabajador>;
  constructor(private servicioTrabajadores:TrabajadoresService) { }

  ngOnInit(): void {
    this.trabajadores=this.servicioTrabajadores.getTrabajadores();
  }

}
