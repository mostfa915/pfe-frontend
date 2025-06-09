import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Communication } from '../models/communication.model';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private readonly apiUrl = `${environment.apiBaseUrl}/communications`;
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.setAuthHeader();
  }

  private setAuthHeader(): void {
    const token = this.authService.getToken();
    
    if (token) {
      this.httpOptions.headers = this.httpOptions.headers.set(
        'Authorization',
        `Bearer ${token}`
      );
    }
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur inconnue est survenue';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getAll(): Observable<Communication[]> {
    return this.http.get<Communication[]>(this.apiUrl, this.httpOptions).pipe(
      retry(1), // Réessaye une fois en cas d'échec
      catchError(this.handleError)
    );

    
  }
  getAll1(): Observable<Communication[]> {
    return this.http.get<Communication[]>('http://localhost:8081/api/communications');
  }
  

  getById(id: number): Observable<Communication> {
    return this.http.get<Communication>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  create(comm: Communication): Observable<Communication> {
    return this.http.post<Communication>(this.apiUrl, comm, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  update(id: number, comm: Communication): Observable<Communication> {
    return this.http.put<Communication>(`${this.apiUrl}/${id}`, comm, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  refreshToken(): void {
    this.setAuthHeader();
  }
}