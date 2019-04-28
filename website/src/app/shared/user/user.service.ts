import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public API = '//localhost:8080';
  public U_API = this.API + '/users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API+ '/admin');
  }
  
  get(id: string) {
    return this.http.get(this.U_API + '/' + id);
  }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user['href']) {
      result = this.http.put(user.href, user);
    } else {
      result = this.http.post(this.U_API, user);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}