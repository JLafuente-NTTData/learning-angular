import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Definimos la estructura del usuario
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root', // Lo hace disponible en toda la app (singleton)
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/users';

  constructor() {}

  // Método para obtener todos los usuarios
  getAllUsersa(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  //Método para obtener un usuario por su ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
