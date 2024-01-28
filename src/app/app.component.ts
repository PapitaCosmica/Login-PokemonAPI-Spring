import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  standalone:true,
  imports:[RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lauth-firebase';
}

