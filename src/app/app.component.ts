import { Component } from '@angular/core';
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
import { RouterOutlet } from '@angular/router';
import {fadeInOut, slideRight, slideLeft} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations:[
    trigger('openClose', [ 
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('flynIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('routeAnimations', [
      // Definição dos estados finais de cada componente
      state('login',style({backgroundColor:'orange'})),
      state('token',style({backgroundColor:'blue'})),
      state('accounts',style({backgroundColor:'brown'})),
      
      // Definição da transição da esquerda para direita
      transition('login => token, token => accounts',slideRight),
       
    // Definição da transição da direita para esquerda
    transition('token => login, accounts => token',slideLeft)  
    ])
  ]
})
export class AppComponent {
  title = 'AnimationsDemo';

  prepareRoute(outlet: RouterOutlet) {
    console.dir(outlet.activatedRouteData['animation']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
