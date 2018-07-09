import {animate, animateChild, query, stagger, style, transition, trigger} from '@angular/animations';

export let AppAnimationItem = trigger('items', [
    transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),  // initial
        animate('3s cubic-bezier(.8, -0.6, 0.2, 1.5)',
            style({transform: 'scale(1)', opacity: 1}))  // final
    ])
]);
export let AppAnimationList = trigger('list', [
    transition(':enter', [
        query('@items', stagger(300, animateChild()))
    ]),
]);
