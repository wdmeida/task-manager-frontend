import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';

@Injectable()

export class AuthService {
  public constructor(private tokenService: Angular2TokenService) { }

  public signUp(user: User) {
    //  call Angular2-Token SignUp method here!
    // returns a Observable<Response>
  }

  public singIn(uid: string, password: string) {
    //  call Angular2-Token SignIn method here!
    // returns a Observable<Response>
  }

  public signOut() {
    //  call Angular2-Token SignOut method here!
    // returns a Observable<Response>
  }

  public isSignedIn() {
    //  call Angular2-Token userSignedIn method here!
    // returns a Boolean
  }

  private handleErrors(error: Response) {
    console.log('SALVANDO O ERRO EM UM ARQUIVO DE LOG - DETALHES DO ERRO => ', error);
    return Observable.throw(error);
  }
}