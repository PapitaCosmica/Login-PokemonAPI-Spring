import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgModel,FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/app-routing';
import { Libro } from 'src/app/models/libro';

import { LibroService } from 'src/app/services/libro.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-libro-details',
  templateUrl: './libro-details.component.html',
  styleUrls: ['./libro-details.component.css'],
  standalone:true,
  imports:[NgIf,NgFor,FormsModule,RouterModule]
})
export class LibroDetailsComponent implements OnInit{
  @Input() viewMode = false;
  @Input() currentLibro: Libro={
    titulo:'',
    sinopsis:'',
    publicado:false
  };

  message = '';

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getLibro(this.route.snapshot.params['id']);
    }
  }

  getLibro(id: string): void {
    this.libroService.get(id).subscribe({
      next: (data) => {
        this.currentLibro = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublicado(status: boolean): void {
    const data = {
      titulo: this.currentLibro.titulo,
      sinopsis: this.currentLibro.sinopsis,
      publicado: status
    };

    this.message = '';

    this.libroService.update(this.currentLibro.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentLibro.publicado = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateLibro(): void {
    this.message = '';

    this.libroService
      .update(this.currentLibro.id, this.currentLibro)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This Libro was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteLibro(): void {
    this.libroService.delete(this.currentLibro.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/libros']);
      },
      error: (e) => console.error(e)
    });
  }
  
}

