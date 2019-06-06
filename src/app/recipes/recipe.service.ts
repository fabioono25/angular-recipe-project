import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pasta', 'This is a pasta italiana', 
        'https://img.pixers.pics/pho_wat(s3:700/FO/49/08/33/96/700_FO49083396_3fdc1e0782a0bd15e2f7e9f47efbce20.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/wall-murals-pasta-italiana-spaghetti-al-pomodoro.jpg.jpg',
        [new Ingredient('Meat', 1),
        new Ingredient('Potato', 2)]),
        new Recipe('Pizza', 'This is a pizza italiana', 'https://dafrancoacapulco.com/wp-content/uploads/2018/06/pizza-italliana-acapulco-1020x731.jpg',
        [new Ingredient('Meat', 1),
        new Ingredient('Potato', 2),
        new Ingredient('Strawberry', 10)])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); //copy of array
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
