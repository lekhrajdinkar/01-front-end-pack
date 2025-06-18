# Animation in ng
## A intro
- npm install --save **@angular/animations**
- import : **BrowserAnimationsModule**
- NOT for long-running animation
- @component > animations: [trigger1, trigger2, ...] :point_left:

## B key component
```html
Triggers:       Define the name of the animation and contain the states and transitions
States:         Define different style configurations for the animation
Transitions:    Define how the animation moves between states
Animate:        Define the timing and easing of the transition
```

## C basic syntax
- **trigger(...)**
  - trigger("trigger1", state(), state(), ...)
- **state(...)**
  - state('state1', style({ 'bkgrnd-color':'red'; ... }))
- **transition(...)** between states
  - transition('state1 => state2', **animate**(300))
  - transition('state2 => state1', animate(1200))
  - transition('state1 <=> state2', animate(300))
  - transition('state1 <=> state2', animate(300, style({}))  )

```html
<!--Static-->
<div [@trigger1] = "state1"> </div>
<div [@trigger1] = "state2"> </div>

<!--dynamic-->
<div [@trigger1] = "state"> </div>
onAnimate(){ this.state == 'state1' ? this.state = 'state1' : this.state = 'state2';}
```
---
## D Advance transition
- note:
  - If don't have any initial state, use  `void`
  - If want to transit to **any** state use `*`
- transition('state1 <=> state2', []) // **pass array of transition**
```
transition('state1 <=> state2', [
  style(  { ... css... }  ), //add style directly as well
  animate(300, style(  { ... css... }  )),
  animate(300, style(  { ... css... }  )),
  animate(300, style(  { ... css... }  )), ...  
])

note : it will follow order of array element.
```
- **KeyFrames**
```
transition(
    'state1 <=> state2', 
    [  
        style(  { ... css... }  ), ...

        animate(300, style(  { ... css... }  )),
        animate(300, style(  { ... css... }  )), ...

        animate(1000, keyFrames(... array of styles ...)),
        animate(1000, keyFrames(... array of styles ...)),
        animate(1000, keyFrames(... array of styles ...)), ...
    ]
)
```
---
## E. Examples
- check : 
  - anim-1.ts : https://github.com/lekhrajdinkar/99-project-01-OTT-ng/blob/master/ott-share-v2/src/app/style/anim-1.ts
  - usages:
    - https://github.com/lekhrajdinkar/99-project-01-OTT-ng/blob/master/ott-share-v2/src/app/shared/comp/dropdown/dropdown.component.ts
    - ...
    - ...
    
```typescript
import { trigger, state, style, transition, animate } from '@angular/animations';

export const HighLightTrigger = trigger('HighLightTrigger', [
    state('out', style({ backgroundColor: 'rgba(189, 225, 250, 0.39)' })),
    state('in', style({ backgroundColor: 'rgb(29, 208, 231)' })),
    transition('out <=> in', [ animate('0.5s')])
  ])

  export const compBumpNoState = trigger('compBumpNoState', [
    transition('* => *', [animate('0.2s', style({transform :  'scale(1.5)'}))])
  ])

  export const rotateTrigger= trigger('rotateTrigger', [
    state('none', style({transform :  'rotateZ(0deg)'})),
    state('block', style({transform : 'rotateZ(180deg)'})),
    transition('none <=> block', [animate('0.3s')])
  ])

  export const fadeTrigger= trigger('fadeTrigger', [
    state('none', style({opacity:'0'})),
    state('block', style({opacity:'1'})),
    transition('none <=> block', [animate('0.3s')])
  ])

  //Routing Animation
  //fadeout
    export const routingAnimTriggerFadeOut = trigger('routingAnimTriggerFadeOut', [
      transition(':enter', [style({opacity: 0}),animate('2s')])
    ])
  
    //Enter Left
    export const routingAnimTriggerEnterLeft = trigger('routingAnimTriggerEnterLeft', [
      transition(':enter', [ style({transform: 'translateX(-100%)'}), animate('1s')]),
      transition(':leave', [style({transform: 'translateX(100%)'}), animate('0.1s')])
    ])
     //Enter Right
     export const routingAnimTriggerEnterRight = trigger('routingAnimTriggerEnterRight', [
      transition(':enter', [ style({transform: 'translateX(200%)'}), animate('1s')]),
      transition(':leave', [style({transform: 'translateX(100%)'}), animate('0.1s')])
    ])
```






