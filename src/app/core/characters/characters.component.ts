import { Component, NgModule, OnInit } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {CharactersApiService} from "./shared/characters-api.service";
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { CardCharacterComponent } from './character/card-character.component';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  standalone:true,
  imports:[CardCharacterComponent],
 

})
export class CharactersComponent implements OnInit {

  allCharacters: any[] = [];
  paginaAtual: number = 0;
  itemsPerPage: number =8 ;
  total: number = 0;
  nomePersonagem: any = '';
  carregando=false;

  constructor(private characterService: CharactersApiService) { }
  ngOnInit(): void {
    console.log("CARGA CATALOGO");
    this.getCharacters(this.paginaAtual);
  }

  getCharacters(pageNumber: number){
    this.allCharacters=[];
    this.total=0;
    this.carregando=true;
     this.characterService.getAllCharacters(this.itemsPerPage, pageNumber * this.itemsPerPage, this.nomePersonagem)
      .subscribe(
        (resposta)=>{
          this.allCharacters = resposta.results
          this.total = resposta.total
          this.carregando=false
        }
        , (erro) => {
          this.carregando=false
          //dispara se der erro
        });
  }

  consultaPagina(e: number) {
    this.paginaAtual = e;
    this.getCharacters(this.paginaAtual)
  }

  pesquisar() {
    this.paginaAtual = 0;
    this.getCharacters(this.paginaAtual);

  }
}
