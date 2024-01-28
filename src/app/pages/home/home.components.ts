import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../core/services/auth.service';
import { Router , RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule,RouterModule],
  selector: 'app-home',
  template: `
    <mat-toolbar color="accent">
      <span>HOME</span>
      
      <button mat-flat-button [routerLink]="['/characters']">Marvel</button>
      <button mat-flat-button [routerLink]="['/home']">Home</button>
      <button mat-flat-button [routerLink]="['/poke']">PokeApi</button>
      <button mat-flat-button [routerLink]="['/tutorial-list']">Tutoriales</button>
      <button mat-flat-button [routerLink]="['/add-tutorial']">Nuevo Tutorial</button>
      <button mat-flat-button [routerLink]="['tutorial-details/:id']">Detalles tutorial</button>
      <button mat-flat-button [routerLink]="['/libro-list']">Libros</button>
      <button mat-flat-button [routerLink]="['/add-libro']">Nuevo Libro</button>
      <button mat-flat-button [routerLink]="['app-libro-details/:id']">Detalles Libro</button>
      <button mat-flat-button (click)="logOut()">Salir</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      mat-toolbar {
        display: flex;
        justify-content: space-between;
      
      }
    `,
  ],
})
export default class HomeComponent {
  private _router = inject(Router);

  private authservice = inject(AuthService);

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/auth/log-in');
      
    } catch (error) {
      console.log(error);
    }
  }
}