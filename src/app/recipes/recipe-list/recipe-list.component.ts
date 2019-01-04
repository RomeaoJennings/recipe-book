import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'Test Description', 'https://www.maxpixel.net/static/photo/1x/Bio-Food-Home-Made-Recipe-Dishes-Kitchen-Meals-1175496.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
