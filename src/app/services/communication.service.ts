import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Communication } from '../models/communication.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private baseUrl = 'http://localhost:8081/api/communications';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Communication[]> {
    return this.http.get<Communication[]>(this.baseUrl);
  }

  getById(id: number): Observable<Communication> {
    return this.http.get<Communication>(`${this.baseUrl}/${id}`);
  }

  create(comm: Communication): Observable<Communication> {
    return this.http.post<Communication>(this.baseUrl, comm);
  }

  update(id: number, comm: Communication): Observable<Communication> {
    return this.http.put<Communication>(`${this.baseUrl}/${id}`, comm);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
