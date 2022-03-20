import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;
  private redirectUrl: string | undefined;

  constructor(private router: Router) { }

  public setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  public auth(login: string, password: string): void {
    // todo: criar validação de senha em API
    if (login === 'admin' && password === 'qweqwe') {
      this.authenticated = true;
      localStorage.setItem('authenticated', `${this.authenticated}`);
      this.redirectUrl = this.redirectUrl === undefined ? '/' : this.redirectUrl;
      this.router.navigate([this.redirectUrl]);
    }
  }

  public isAuthenticated(): boolean {
    const authSuccess = localStorage.getItem('authenticated');
    if (authSuccess) {
      return this.authenticated = true;
    }
    return this.authenticated;
  }
}