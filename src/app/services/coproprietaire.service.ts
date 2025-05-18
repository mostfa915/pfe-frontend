import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Coproprietaire {
  id: number;
  num: string;
  email: string;
  mdpHash: string;
  role: string;
  soldeCharges: number;
}

@Injectable({
  providedIn: 'root',
})
export class CoproprietaireService {
  private apiUrl = 'http://localhost:8081/api/Coproprietaires';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Coproprietaire[]> {
    return this.http.get<Coproprietaire[]>(this.apiUrl);
  }

  getById(id: number): Observable<Coproprietaire> {
    return this.http.get<Coproprietaire>(`${this.apiUrl}/${id}`);
  }

  create(copro: Coproprietaire): Observable<Coproprietaire> {
    return this.http.post<Coproprietaire>(this.apiUrl, copro);
  }

  update(id: number, copro: Coproprietaire): Observable<Coproprietaire> {
    return this.http.put<Coproprietaire>(`${this.apiUrl}/${id}`, copro);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  
}
