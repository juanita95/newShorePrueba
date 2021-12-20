import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharactersModel} from '../models/characters.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private httpClient: HttpClient) { }

  /** get all characters who are Hogwarts students and staff during the book series**/

  async getAllCharacters(): Promise<CharactersModel[]>{
    const result = await this.httpClient.get<CharactersModel[]>(`${environment.charactersUrl}`).toPromise();
    return result;
  }
}
