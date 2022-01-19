import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredientsArray : Ingredient[] = [
        new Ingredient('apples',5),
        new Ingredient('orange',4)
    ]

    getIngredients(){
       return this.ingredientsArray.slice();
    }

    addIngredient(ingredient : Ingredient)
    {
        console.log('ingredient',ingredient);
        this.ingredientsArray.push(ingredient);
        this.ingredientsChanged.emit(this.ingredientsArray.slice());
        console.log(this.ingredientsArray);

    }
    addIngredients(ingredients: Ingredient[]){

        this.ingredientsArray.push(...ingredients );
        this.ingredientsChanged.emit(this.ingredientsArray.slice());
        console.log(this.ingredientsArray.slice());
        
    }
}