import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{
  characters: any = [];
  character: any = [];

  //Constructor
  constructor(private http: HttpClient, private characterService: CharacterService,private router: Router) {
  }

  //NgOnInt
  ngOnInit(): void {
    this.getAllCharacters();
  }

  //Get all characters directly with HttpClient in this class
  getAllCharacters() {
    this.http.get("https://rickandmortyapi.com/api/character").subscribe(response => {
      this.characters = response;
      console.log(response);
    });
  }

  //Button See More - Character Getting Information using Service (HttpClient)
  showChar(id: any) {
    //Go to route with id selected on card
    this.router.navigate(['/character',id]);
  };


}

