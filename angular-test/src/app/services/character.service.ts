import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { ApiResponse, Character, CharacterParams } from '../shared/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl: string = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  getAllCharacters(characterParams: CharacterParams ){
    console.log(characterParams);
    let params: string = "?";

    if(characterParams.name !== ""){
        params = params + "name=" + characterParams.name;
    }

    if(characterParams.status !== ""){
      params = 
        params + 
        ((params.length > 1) 
        ? "&status=" + characterParams.status 
        : "status=" + characterParams.status);
    }

    return this.http.get<ApiResponse>(this.baseUrl+params);
  }


  getCharacter(id : string){
      return this.http.get<Character>(this.baseUrl + "/" +  id);
  }

}
