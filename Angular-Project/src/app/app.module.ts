import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserInscComponent } from './user-insc/user-insc.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NewEntreeComponent } from './new-entree/new-entree.component';
import { HomeComponent } from './home/home.component';
import { EntreesComponent } from './entrees/entrees.component';
import { RouterModule, Routes } from '@angular/router';
import { DisplayExerciceComponent } from './display-exercice/display-exercice.component';
import { NewSortieComponent } from './new-sortie/new-sortie.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { NewExerciceComponent } from './new-exercice/new-exercice.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuardService} from "./auth-guard.service";


const appRoutes: Routes = [
  {path : '',canActivate: [AuthGuardService] , component : HomeComponent},
  {path: 'exercice/:id', canActivate: [AuthGuardService] , component: DisplayExerciceComponent},
  {path: 'exercices', canActivate: [AuthGuardService] ,component: ExercicesComponent},
  {path: 'save-exercice',canActivate: [AuthGuardService] , component: NewExerciceComponent},
  {path: 'save-entree',canActivate: [AuthGuardService] , component: NewEntreeComponent},
  {path: 'save-sortie/:id',canActivate: [AuthGuardService] , component: NewSortieComponent},
  {path: 'connexion', component: UserAuthComponent},
  {path: 'signup', component: UserInscComponent},
  {path: 'entrees',canActivate: [AuthGuardService] , component: EntreesComponent},
  {path: 'profile',canActivate: [AuthGuardService] , component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    UserInscComponent,
    NewEntreeComponent,
    HomeComponent,
    EntreesComponent,
    DisplayExerciceComponent,
    NewSortieComponent,
    ExercicesComponent,
    NewExerciceComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
