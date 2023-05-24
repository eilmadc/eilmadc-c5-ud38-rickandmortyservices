import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  //Props id of char and character
  id: any;
  @Input() characterChild:any = {};

  //Constructor checking activatedRoute and params
  constructor(private activatedRoute: ActivatedRoute, private characterService:CharacterService) {

    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
  });
}

  //NgOnInit
  ngOnInit() {
    console.log(this.id);
    this.characterService.getCharacter(this.id)
    .subscribe(result => {
      this.characterChild= result;
      console.log(this.characterChild);
    });
  }

}
