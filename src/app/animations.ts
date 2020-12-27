import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const changeTabAnimation = trigger('changeTabAnimation', [
  transition('HomePage => *, FavPage => OrderPage, FavPage => AccountPage, OrderPage => AccountPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ right: '100%', opacity: 0 }))]),
      query(':enter', [animate('500ms ease-out', style({ right: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),

  transition('AccountPage => *, OrderPage => FavPage, OrderPage => HomePage, FavPage => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ])
]);

export const pullDownAnimation = trigger('pullDownAnimation', [
  transition(':enter', [
    style({
      maxHeight: 0,
      opacity: 0
    }),
    animate('500ms ease-out', style({ maxHeight: 500, opacity: 1 }))
  ]),
  transition(':leave', [
    style({
      maxHeight: 500,
      opacity: 1
    }),
    animate('500ms ease-in', style({ maxHeight: 0, opacity: 0 }))
  ])
]);
