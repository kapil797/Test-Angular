import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  recipe:Receipe;
  id:number;
  constructor(private receipeService : ReceipeService,
              private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe (
              (params : Params)=>
              {
                this.id= +params['id'];
                this.recipe = this.receipeService.getReceipe(this.id);
              }
              );
  }
  onAddToShoppingList(){
    this.receipeService.addIngredientToShopList(this.recipe.ingredients);
  }
}
