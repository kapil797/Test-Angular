import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [ReceipeService]
})
export class ReceipesComponent implements OnInit {
  selectedRecipe!: Receipe;
  constructor(private receipeService : ReceipeService) { }

  ngOnInit(): void {
    this.receipeService.recipeSelected.subscribe((receipe : Receipe) => {this.selectedRecipe = receipe});
  }


}
