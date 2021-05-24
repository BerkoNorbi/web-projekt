import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {

  constructor(private angularfirestore: AngularFirestore) {
    
   }



  

  get(collectionName: string): Observable<T[]> {
    return this.angularfirestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      return query;
    }).valueChanges() as Observable<T[]>;
  }


  getplus(collectionName: string, uid: string, opStr = '=='): Observable<T[]>{
    return this.angularfirestore.collection
    (
      collectionName,
      ref => 
      {
        let query: CollectionReference | Query = ref;

        if (uid) 
        {
          query = query.where('managingEntityid', opStr as any, uid);
        }

        return query;
      }
    ).valueChanges() as Observable<T[]>;
  }



  get_name_of_user_asd(collectionName: string,email: string ,opStr = '==' ) :  Observable<T[]>{
    this.angularfirestore.collection('User')
    return this.angularfirestore.collection(collectionName,
      ref => {
        let query: CollectionReference | Query = ref;
        if (email) {
          query = query.where('email', opStr as any, email);

        }
        return query;
      }
    ).valueChanges() as  Observable<T[]>;
  }
 


  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.angularfirestore.createId();
    data.id = uid;
    await this.angularfirestore.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  async delete(collectionName: string, id: string): Promise<void> {
    return this.angularfirestore.collection(collectionName).doc(id).delete();
  }

  async update(collectionName: string, data: T): Promise<void> {
    return this.angularfirestore.collection(collectionName).doc(data.id).update(data).then(
      result => { console.log(result); }, err => { console.log(err); }).finally(() => { console.log('finally'); });
  }
}
