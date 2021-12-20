import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolsComponent} from './schools.component';
import {CharactersSchoolsComponent} from './components/characters-schools/characters-schools.component';
import {GeneralCharactersComponent} from './components/general-characters/general-characters.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolsComponent,
    children: [
      {
        path: 'general',
        component: GeneralCharactersComponent,
      },
      {
        path: 'characters',
        component: CharactersSchoolsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
