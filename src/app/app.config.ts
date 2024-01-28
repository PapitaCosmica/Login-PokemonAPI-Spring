import { ApplicationConfig } from "@angular/core";
import { Router, provideRouter } from "@angular/router";
import { firebaseProviders } from "./firebase.config";
import { routes } from "./app-routing";
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";


export const appConfig:ApplicationConfig={
   
    providers:[provideRouter(routes), firebaseProviders, provideAnimations(),
    importProvidersFrom(HttpClientModule), provideAnimations()]
}
