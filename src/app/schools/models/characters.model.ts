import {WandModel} from './wand.model';

export class CharactersModel{
  actor: string;
  alive: boolean;
  alternate_actors: any[];
  alternate_names: any[];
  ancestry: string;
  dateOfBirth: Date;
  eyeColour: string;
  gender: string;
  hairColour: string;
  hogwartsStaff: boolean;
  hogwartsStudent: boolean;
  house: string;
  image: string;
  name: string;
  lastName?: string;
  patronus: string;
  species: string;
  wand: WandModel[];
  wizard: string;
  yearOfBirth: number;
}
