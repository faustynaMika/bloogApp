import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {CoreModule} from "./core/core.module";
import {getStorage, provideStorage} from "@angular/fire/storage";
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {RestService} from "./services/rest.service";
import {DataService} from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    CoreModule,
  ],
  providers: [
    RestService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
