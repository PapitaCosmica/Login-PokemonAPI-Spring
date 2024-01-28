import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';
import { LibroDetailsComponent } from '../libro-details/libro-details.component';
import { LibroListComponent } from '../libro-list/libro-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css'],
  standalone:true,
  imports:[FormsModule, LibroDetailsComponent,LibroListComponent,NgIf]
})
export class AddLibroComponent {
  libro: Libro = {
    titulo:'',
    sinopsis: '',
    publicado: false
  };
  submitted = false;

  constructor(private LibroService: LibroService){}

  savelibro(): void {
    const data = {
      titulo: this.libro.titulo,
      sinopsis: this.libro.sinopsis
    };

    this.LibroService.create(data).subscribe({
      next: (res:any) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e:any) => console.error(e)
    });
  }

  newlibro(): void {
    this.submitted = false;
    this.libro = {
      titulo: '',
      sinopsis: '',
      publicado: false
    };
  }
}
