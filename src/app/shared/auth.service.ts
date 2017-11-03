import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';

@Injectable()

export class AuthService {
  public constructor(private tokenService: Angular2TokenService) { }

  public signUp(user: User): Observable<Response> {
    return this.tokenService.registerAccount(user as any)
      .catch(this.handleErrors);
  }

  public singIn(uid: string, password: string) {
    //  call Angular2-Token SignIn method here!
    // returns a Observable<Response>
  }

  public signOut(): Observable<Response> {
    return this.tokenService.signOut()
      .catch(this.handleErrors);
  }

  public userSignedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  private handleErrors(error: Response) {
    console.log('SALVANDO O ERRO EM UM ARQUIVO DE LOG - DETALHES DO ERRO => ', error);
    return Observable.throw(error);
  }
}
