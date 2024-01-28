import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';
import { NgModel,FormsModule } from '@angular/forms';
import { LibroDetailsComponent } from '../libro-details/libro-details.component';
import { NgIf,NgFor } from '@angular/common';



@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css'],
  standalone:true,
imports:[ FormsModule, LibroDetailsComponent,NgFor,NgIf]
})
export class LibroListComponent implements OnInit {

libros?: Libro[];
titulo= '';
currentLibro: Libro = {};
currentIndex = -1;

constructor(private LibroService: LibroService){}

ngOnInit(): void {
this.retrieveLibros();
}

retrieveLibros(): void {
 this.LibroService.getAll().subscribe({
   next: (data:any) => {
     this.libros = data;
     console.log(data);
   },
   error: (e) => console.error(e)
 });
}

refreshList(): void {
 this.retrieveLibros();
 this.currentLibro = {};
 this.currentIndex = -1;
}

setActiveLibro(libro: Libro, index: number): void {
 this.currentLibro = libro;
 this.currentIndex = index;
}

removeAllLibros(): void {
 this.LibroService.deleteAll().subscribe({
   next: (res:any) => {
     console.log(res);
     this.refreshList();
   },
   error: (e:any) => console.error(e)
 });
}

searchTitle(): void {
 this.currentLibro = {};
 this.currentIndex = -1;

 this.LibroService.findByTitle(this.titulo).subscribe({
   next: (data:any) => {
     this.libros = data;
     console.log(data);
   },
   error: (e:any) => console.error(e)
 });
}
}
