import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Form } from '../models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formsList: AngularFireList<any>;
  formObject: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  AddForm(form: object) {
    this.formsList.push(form as Form);
  }

  GetFormsList() {
    this.formsList = this.db.list('orden-list');
    return this.formsList;
  }

  GetForm(key: string) {
    this.formObject = this.db.object('orden-list/' + key);
    return this.formObject;
  }

  UpdateForm(form: Form, key: string) {
    this.db.object('orden-list/' + key)
    .update(form);
  }
}
