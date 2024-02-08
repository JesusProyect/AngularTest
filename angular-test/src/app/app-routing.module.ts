import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './Pages/characters/characters.component';
import { CharacterDetailComponent } from './Pages/character-detail/character-detail.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: '**', redirectTo: 'characters'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
