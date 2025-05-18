import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Syndic } from '../models/syndic.model';

@Injectable({
  providedIn: 'root'
})
export class SyndicService {
  private apiUrl = 'http://localhost:8081/api/Syndic';

  constructor(private http: HttpClient) {}

  getAllSyndics(): Observable<Syndic[]> {
    return this.http.get<Syndic[]>(this.apiUrl);
  }

  getSyndicById(id: number): Observable<Syndic> {
    return this.http.get<Syndic>(`${this.apiUrl}/${id}`);
  }

  createSyndic(syndic: Syndic): Observable<Syndic> {
    return this.http.post<Syndic>(this.apiUrl, syndic);
  }

  updateSyndic(id: number, syndic: Syndic): Observable<Syndic> {
    return this.http.put<Syndic>(`${this.apiUrl}/${id}`, syndic);
  }

  deleteSyndic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
