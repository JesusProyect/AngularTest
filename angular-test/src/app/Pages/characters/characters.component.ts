import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character, CharacterParams } from 'src/app/shared/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[];
  characterParams: CharacterParams;

  @ViewChild('sortInput') sortInput! : ElementRef;

  constructor(private characterService: CharacterService) {
    this.characterParams = { name:  "" , status : "" };
    //this one is for first charge, if there is an empty array there shows a mesage saying the research fails
    this.characters = [{name:"", status: "", image:"", species:"", gender:"", created:"", id:"" }]
   }

  ngOnInit(): void {
    this.loadCharacters(this.characterParams);
  }


  loadCharacters(characterParams: CharacterParams){
    this.characterService.getAllCharacters(characterParams).subscribe({
      next:({results}) => {
        this.characters = results;
      },
      error:() => this.characters = []
    })
  }

  search(input : HTMLInputElement){

    if(input.value === ""){
      console.log("vacio");
      return;
    }
    this.characterParams.name = input.value;
    this.loadCharacters(this.characterParams);

  }

  filter(event: any){
    switch(event.target.value){
      case 'alive': {
        this.characterParams.status = "alive";
        this.loadCharacters(this.characterParams);
      }
      break;
      case 'dead': {
        this.characterParams.status = "dead";
        this.loadCharacters(this.characterParams);
      }
      break;
      default:{
        this.characterParams.status = "unknown";
        this.loadCharacters(this.characterParams);
      }
      break;
    }

    this.sortInput.nativeElement.value = "Ordenar";
  }

  sort(event: any){
    switch(event.target.value){
      case'asc': 
          this.characters.sort((a, b) => a.name.localeCompare(b.name));
      break;
      case'desc':
          this.characters.sort((a, b) => b.name.localeCompare(a.name));
      break;
      default: this.loadCharacters(this.characterParams);
      break;
    }
  }

}
