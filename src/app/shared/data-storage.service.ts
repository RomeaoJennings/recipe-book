import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private sourceUrl = 'https://ng-recipe-book-bdeb9.firebaseio.com/';

  constructor(
    private http: Http,
    private recipeService: RecipeService) {

  }

  storeRecipes() {
    return this.http.put(this.sourceUrl + 'recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get(this.sourceUrl + 'recipes.json')
      .pipe(map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
            console.log(recipe);
          }
        }
        return recipes;
      }))
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
