import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8081/api/auth';
  private tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    // Initialisation avec le token du localStorage s'il existe
    const savedToken = localStorage.getItem('jwt_token');
    if (savedToken) {
      this.tokenSubject.next(savedToken);
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        this.storeToken(response.token);
      })
    );
  }

  register(email: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, { email, password, role });
  }

  storeToken(token: string): void {
    localStorage.setItem('jwt_token', token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }
}