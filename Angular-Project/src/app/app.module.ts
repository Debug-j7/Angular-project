import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserInscComponent } from './user-insc/user-insc.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NewEntreeComponent } from './new-entree/new-entree.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    UserInscComponent,
    NewEntreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
