import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //list of models
  recipes: Recipe[] = [
    new Recipe('Pasta', 'This is a pasta italiana', 'https://img.pixers.pics/pho_wat(s3:700/FO/49/08/33/96/700_FO49083396_3fdc1e0782a0bd15e2f7e9f47efbce20.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/wall-murals-pasta-italiana-spaghetti-al-pomodoro.jpg.jpg'),
    new Recipe('Pizza', 'This is a pizza italiana', 'https://dafrancoacapulco.com/wp-content/uploads/2018/06/pizza-italliana-acapulco-1020x731.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
