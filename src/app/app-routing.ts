import { Routes,RouterModule} from '@angular/router';
//poke
import { authGuard, publicGuard } from './core/guards';
import HomeComponent from './pages/home/home.components';
import SignUpComponent from './pages/auth/sign-up/sign-up.component';
import logInComponent from './pages/auth/log-in/log-in.component';
import { ListComponent } from './poke/list/list.component';
import { ViewComponent } from './poke/view/view.component';
import { NgModule } from '@angular/core';
import { CardCharacterComponent } from './core/characters/character/card-character.component';
import { CharactersApiService } from './core/characters/shared/characters-api.service';
import { CharactersComponent} from './core/characters/characters.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddLibroComponent } from './components/add-libro/add-libro.component';
import { LibroListComponent } from './components/libro-list/libro-list.component';
import { LibroDetailsComponent } from './components/libro-details/libro-details.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
    children:[
      {
        path: 'poke',
        component: ListComponent, // Reemplaza ListComponent con el componente que corresponda
      },
      {
        path: 'characters',
        component: CharactersComponent,
      },
      { path: 'poke/view/:name', component: ViewComponent },
      { path: 'home', component: ViewComponent },
      { path: 'core/characters', component: ViewComponent },
      {path: 'tutorial-list',component: TutorialsListComponent},
      {
        path: 'tutorials/:id',
        component: TutorialDetailsComponent,
      },
      {path: 'add-tutorial', component: AddTutorialComponent},
      {path: 'buscar-tutorial', component: AddTutorialComponent},
      {path: 'add-libro', component: AddLibroComponent},
      {path: 'libro-list', component: LibroListComponent},
      {path: 'libro-details/:id', component:LibroDetailsComponent }
    
      
    
    ]
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'log-in',
        component: logInComponent,
      },
    ],
  },
  // Nueva ruta para 'poke'
  
  {
    path: 'poke/:id', // Puedes agregar un parámetro de ruta si es necesario
    component: ViewComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
