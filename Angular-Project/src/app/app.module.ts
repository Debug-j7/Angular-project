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

const appRoutes: Routes = [
  {path : '', component : HomeComponent},
  {path: 'exercice/:id', component: DisplayExerciceComponent},
  {path: 'exercices', component: ExercicesComponent},
  {path: 'save-exercice', component: NewExerciceComponent},
  {path: 'save-entree', component: NewEntreeComponent},
  {path: 'save-sortie/:id', component: NewSortieComponent},
  {path: 'connexion', component: UserAuthComponent},
  {path: 'signup', component: UserInscComponent},
  {path: 'entrees', component: EntreesComponent}
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
