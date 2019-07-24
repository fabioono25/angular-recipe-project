import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
    //recipeSelected = new EventEmitter<Recipe>();
    //recipeSelected = new Subject<Recipe>();

    // private recipes: Recipe[] = [
    //     new Recipe('Pasta', 'This is a pasta italiana', 
    //     'https://img.pixers.pics/pho_wat(s3:700/FO/49/08/33/96/700_FO49083396_3fdc1e0782a0bd15e2f7e9f47efbce20.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/wall-murals-pasta-italiana-spaghetti-al-pomodoro.jpg.jpg',
    //     [new Ingredient('Meat', 1),
    //     new Ingredient('Potato', 2)]),
    //     new Recipe('Pizza', 'This is a pizza italiana', 'https://dafrancoacapulco.com/wp-content/uploads/2018/06/pizza-italliana-acapulco-1020x731.jpg',
    //     [new Ingredient('Meat', 1),
    //     new Ingredient('Potato', 2),
    //     new Ingredient('Strawberry', 10)])
    //   ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); //copy of array
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipesChanged.next(this.recipes.slice()); //emit a new value
        this.recipes.push(recipe);
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
