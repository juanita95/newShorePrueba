import { Pipe, PipeTransform } from '@angular/core';
import {CharactersModel} from '../../schools/models/characters.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CharactersModel[], arg: string): CharactersModel[] {
    if(!value || !arg){
      return;
    }
    const resultSearch = [];
    for (const character of value){
      if (character.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1){
        resultSearch.push(character);
      }
    }
    return resultSearch;
  }

}
