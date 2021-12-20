import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BehaviorSubjectService} from '../../../core/services/behaviorSubject.service';
import {CharactersModel} from '../../models/characters.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-characters-schools',
  templateUrl: './characters-schools.component.html',
  styleUrls: ['./characters-schools.component.scss']
})
export class CharactersSchoolsComponent implements OnInit, OnDestroy {

  public characters: CharactersModel[] = [];
  public columnsUserAdmin: string[] = ['image', 'name', 'lastName', 'wizard', 'ancestry'];
  public columnsNames: string[] = ['Image', 'Name', 'Last Name', 'Wizard', 'Ancestry'];
  public filter: string = '';
  public title: string = '';
  public columnImg: string = 'Image'; // specific to table component if in data there are images columns
  public description: string = 'You can sort characters by Name, LastName, Wizard and Ancestry clicked on the text title'
  private subscription$: Subscription = new Subscription();

  constructor(
    private behaviorSubject: BehaviorSubjectService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getCharactersFilter();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  /** get characters of selected house **/

  getCharactersFilter(): void {
    this.subscription$.add(this.behaviorSubject.bSubjectCharactersFilter.subscribe((characters) => {
      this.characters = characters;
      this.changeDataCharacters(characters);
    }));
  }

  /** assing name and last name to array **/
  changeDataCharacters(characters: CharactersModel[]): void{
    let names: string[] = [];
    let lastNames: string[] = [];
    characters.map((data) => {
      this.title = `Characters of ${data.house}`;
      names = names.concat(data.name.slice(0, data.name.indexOf(' ')));
      lastNames = lastNames.concat(data.name.slice(data.name.indexOf(' '), data.name.length));
    });
    for (let i = 0; i < this.characters.length ; i++) {
      this.characters[i].name = names[i];
      this.characters[i].lastName = lastNames[i];
    }
  }

  /** back to last route */

  backNavigate(): void{
    this.location.back();
  }
}
