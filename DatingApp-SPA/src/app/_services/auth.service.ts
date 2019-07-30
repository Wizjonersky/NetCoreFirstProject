import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response;
      console.log(user);
      if (user) {
        localStorage.setItem('token', user.token); // get token from response  and store it in browser cache
      }
    })
  ); // pipe -> get response and do smoething with it
}

register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}

}
