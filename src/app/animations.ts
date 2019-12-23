import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild    
  } from '@angular/animations';

export const fadeInOut = 

trigger('fadeInOut',[
// Definição da transição da direita para esquerda
transition('accounts => *',[
    // Configura o posicionamento inicial dos componentes que entram e saem da tela nessa transição
    query(':enter, :leave',[
    style({position:'absolute', width:'100%', left:0, height:'400px',transform: 'translateX(100%)'}),
    ]),
    
    // Configura animação do elemento que está deixando o DOM
    query(':leave',[
        style({opacity:1}),
        animate('.5s ease-in', style( {opacity: 0})),
      // animate('2s ease-in', style( {transform : 'rotate(10deg)', backgroundColor:'yellow'}))
        
      ]),
    // Aciona animação dos elementos filhos, caso haja
    query(':leave', animateChild()),        
    
    // Configura animação do elemento que está sendo inserido no DOM
    query(':enter',[
      animate('.5s ease-out', style( {transform : 'translateX(0%)', })),
      //animate('2s ease-in', style( {transform : 'rotate(10deg)', backgroundColor:'purple'}))          
    ]),
    // Aciona animação dos elementos filhos, caso haja
    query(':enter', animateChild()),        
]) 
]);


// Movimento da esquerda para direita
export const slideRight = [

    // Configura o posicionamento inicial dos componentes que entram e saem da tela nessa transição
    query(':enter, :leave',[
        style({position:'absolute', width:'100%', height:'400px', transform : 'translateX(100%)'}),
    ]),

    // Configura animação do elemento que está deixando o DOM
    query(':leave',[
        style({transform:'translateX(0%)'}),
        animate('.5s ease-in', style( {transform : 'translateX(100%)'})),
    ]),
    // Aciona animação dos elementos filhos, caso haja
    query(':leave', animateChild()),        

    // Configura animação do elemento que está sendo inserido no DOM
    query(':enter',[
        style({transform:'translateX(-100%)'}),
        animate('.3s ease-out', style( {transform : 'translateX(0%)', })),

    ]),
    // Aciona animação dos elementos filhos, caso haja
    query(':enter', animateChild()),        
    ];


// MOvimento da direita para esquerda
export const slideLeft = [
    // Configura o posicionamento inicial dos componentes que entram e saem da tela nessa transição
    query(':enter, :leave',[
    style({position:'absolute', width:'100%', height:'400px',transform : 'translateX(100%)'}),
    ]),
    
    // Configura animação do elemento que está deixando o DOM
    query(':leave',[
        style({transform:'translateX(0%)'}),
        animate('.5s ease-in', style( {transform : 'translateX(-100%)'})),
    ]),
    // Aciona animação dos elementos filhos, caso haja
    query(':leave', animateChild()),        
    
    // Configura animação do elemento que está sendo inserido no DOM
    query(':enter',[
        style( {transform : 'translateX(100%)'}),  
        animate('.3s ease-out', style( {transform : 'translateX(0%)', })),
        
    ]),
    // Aciona animação dos elementos filhos, caso haja
    query(':enter', animateChild()),        
];