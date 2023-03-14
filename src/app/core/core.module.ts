import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms'
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  // ...
  imports: [
    // ...
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
