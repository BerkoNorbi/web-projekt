import { AngularFireAuth } from '@angular/fire/auth';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})





export class AuthService {


    authState: any = null;

        constructor(private afAuth: AngularFireAuth) { 
        this.afAuth.authState.subscribe( authState => {
        this.authState = authState;
      }); }


    get isAuthenticated(): boolean {
        return this.authState !== null;
    }

    get currentUserId(): string {
        return this.isAuthenticated ? this.authState.uid : null;
      }

    get currentUseremail(): string {
        return this.isAuthenticated ? this.authState.email : null;
      }


    async logout(): Promise<void> {
        await this.afAuth.signOut();
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    register(email: string, password: string): Promise<any> {
      return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  
    currentUserObservable(): any {
        return this.afAuth.authState;
    }


}
