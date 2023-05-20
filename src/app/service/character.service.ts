import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../enviroments/API';
import { Router } from '@angular/router';

//This class can be used anywhere in project folder using decorator: @injectable
@Injectable({
  providedIn: 'root'
})

//Create class service for characters
export class CharacterService {

  character: any = null;
  //Constructor with HttpClient
  constructor(private http: HttpClient, private router: Router) {
  }

  //Get a single character getting response from the api path server:
  //API_URL + id character
  getCharacter(id: any) {
    return this.http.get(`${API_URL.character}/${id}`);
  }

}
