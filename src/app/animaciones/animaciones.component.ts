import {trigger , animate,animation, state, style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css'],
  animations:[
    trigger("animacionCuadro",[

      state("estado1",style({
        backgroundColor:"blue"
      })),
      state("estado2",style({
        backgroundColor:"red"
      })),
transition("estado1<=>estado2",
animate(1000))
    ])
  ]
})
export class AnimacionesComponent implements OnInit {
estadoCuadro="estado1";
  constructor() { }

  ngOnInit(): void {
  }
  animar()
  {
    this.estadoCuadro =this.estadoCuadro==="estado1"?"estado2":"estado1";
  }

}
