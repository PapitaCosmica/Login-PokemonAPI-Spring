import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const baseUrl= 'http://localhost:2304/api/libros'
const baseUrl= 'http://localhost:8081/api/libros'

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) {
    
  }

  getAll(): Observable<Libro[]> {
   return this.http.get<Libro[]>(baseUrl);
 }

 get(id: any): Observable<Libro> {
   return this.http.get<Libro>(`${baseUrl}/${id}`);
 }

 create(data: any): Observable<any> {
   return this.http.post(baseUrl, data);
 }

 update(id: any, data: any): Observable<any> {
  console.log(1);
  console.log(data.titulo);
   return this.http.put(`${baseUrl}/${id}`, data);
 }

 delete(id: any): Observable<any> {
   return this.http.delete(`${baseUrl}/${id}`);
 }

 deleteAll(): Observable<any> {
   return this.http.delete(baseUrl);
 }

 findByTitle(titulo: any): Observable<Libro[]> {
   return this.http.get<Libro[]>(`${baseUrl}?title=${titulo}`);
 }


}
