import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment as env } from '../../../environments/environment';

interface Response {
  message: string;
  data?: User;
  error?: string;
}
@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http:HttpClient) { }

  public register(user: User): Observable<Response> {
    return this.http.post<Response>(env.serverURL + env.api.createUser, user);
  }
}
