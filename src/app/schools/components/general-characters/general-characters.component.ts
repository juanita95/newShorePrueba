import { Component, OnInit } from '@angular/core';
import {CharactersModel} from '../../models/characters.model';
import {LoadingService} from '../../../core/services/loading.service';
import {SchoolsService} from '../../services/schools.service';
import {BehaviorSubjectService} from '../../../core/services/behaviorSubject.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-general-characters',
  templateUrl: './general-characters.component.html',
  styleUrls: ['./general-characters.component.scss']
})
export class GeneralCharactersComponent implements OnInit {

  public houses: string[] = [];
  public characters: CharactersModel[] = [];
  public charactersFilter: CharactersModel[] = [];

  constructor(
    private schoolService: SchoolsService,
    private loadingService: LoadingService,
    private behaviorSubject: BehaviorSubjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  /** get all characters who are Hogwarts students and staff during the book series**/

  async getAllCharacters(): Promise<void> {
    this.loadingService.setLoading(true);
    try{
      this.characters = await this.schoolService.getAllCharacters();
      this.getHouses(this.characters);
    } catch (err) {
      console.error(err);
    }
    this.loadingService.setLoading(false);

  }

  /** filter houses of array**/
  getHouses(characters: CharactersModel[]): void {
    characters.map((charactersModel) => {
      this.houses = this.houses.concat(charactersModel.house);
      const dataArr = new Set(this.houses);
      const houses = [...dataArr];
      this.houses = houses.filter((house) => house !== '');
    });
  }

  /** get house select by user**/

  getHouseSelect(house: string): void{
    this.charactersFilter = this.characters.filter((houses) => houses.house === house);
    this.behaviorSubject.bSubjectCharactersFilter.next(this.charactersFilter);
    this.router.navigateByUrl('/schools/characters');
  }
}
