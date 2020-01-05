import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
  keyframes
  // ...
} from '@angular/animations';
import {fadeInOut, slideRight, slideLeft} from '../../animations';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass'],
  animations:[
    trigger('routeAnimations', [
      // // Definição dos estados finais de cada componente
      // state('login',style({backgroundColor:'orange'})),
      // state('token',style({backgroundColor:'blue'})),
      // state('accounts',style({backgroundColor:'brown'})),
      
      // Definição da transição da esquerda para direita
      transition('login => token, token => accounts',slideRight),
       
    // Definição da transição da direita para esquerda
    transition('token => login, accounts => token',slideLeft) ,
    // transition( '* => *', [ // Configura o posicionamento inicial dos componentes que entram e saem da tela nessa transição
     
    // // Configura animação do elemento que está sendo inserido no DOM
    // query(':enter',[
    //     style({opacity:0,position:'absolute', height:'*'}),
    //     animate('1s ease-in', style( {opacity:1})),

    // ], {optional:true}),
    // // Aciona animação dos elementos filhos, caso haja
    // query(':enter', animateChild(), {optional:true}),        
    // ]) 
    ])
  ]
})
export class AuthenticationComponent implements OnInit {

  title:string = "Authentication";
  subtitle:string = "Slide transition efect";
  content:string = "This example shows 3 steps auth, with slide transition between the routes";

  constructor() { }

  ngOnInit() {
  }
  prepareAuthRoute(outlet: RouterOutlet) {
    console.dir(outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
