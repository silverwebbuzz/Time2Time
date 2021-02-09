import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './auth.interface';
import { SERVER_URL, USER_DETAILS,TOKEN } from '../../../config';
import { Storage } from '@ionic/storage';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
   }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  checkToken() {
    this.storage.get(USER_DETAILS).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }

  login(body:User):Observable<any> {
    
    return this.http.post(SERVER_URL + 'login/login',body, httpOptions)
    .pipe(
      map(res => {
        return res;
      }),
      catchError(this.handleError)
    )
    // return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
    //   this.authenticationState.next(true);
    // });
  }

  loginAuth(data){
    let perm = {
      userDetails : data.userData,
      userPermission : data.userPermission,
    };
    localStorage.setItem(TOKEN, data.token);
    return this.storage.set(USER_DETAILS, perm).then(() =>{
      this.authenticationState.next(true);
    })
  }

  logout() {
    // localStorage.removeItem(TOKEN);
    return this.storage.remove(USER_DETAILS).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
