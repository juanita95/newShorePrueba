import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CharactersModel} from '../../schools/models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService{
  public bSubjectCharactersFilter: BehaviorSubject<CharactersModel[]> = new BehaviorSubject<CharactersModel[]>([]);
  constructor() {}
}


