import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/shared/models/character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  id: string = ""; //999999999
  error = false;
  character: any;
  constructor(private route: ActivatedRoute, private characterService: CharacterService ) { }

  ngOnInit(): void {

    this.loadCharacter();

  }

  loadCharacter(){
      this.getId();

      this.characterService.getCharacter(this.id).subscribe({
        next:(character) =>{
          this.error = false;
          this.character = character;
          console.log(character);
        },
        error:() => this.error = true
      })

  }


  getId(){
    if(this.route.snapshot.paramMap.get("id") !== undefined){
      this.id = this.route.snapshot.paramMap.get("id")!.toString();
    }
    else{
      this.error = true;
    }
  }

}
