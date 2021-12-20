import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { CharactersSchoolsComponent } from './components/characters-schools/characters-schools.component';
import {SchoolsRoutingModule} from './schools-routing.module';
import { GeneralCharactersComponent } from './components/general-characters/general-characters.component';
import {HttpClientModule} from '@angular/common/http';
import {UtilsModule} from '../utils/utils.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SchoolsComponent, CharactersSchoolsComponent, GeneralCharactersComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    HttpClientModule,
    UtilsModule,
    FormsModule,
  ]
})
export class SchoolsModule { }
