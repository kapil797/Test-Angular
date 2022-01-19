import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipesStartComponent } from './receipes/recipes-start/recipes-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes', component: ReceipesComponent,children:[
    {path:'',component:RecipesStartComponent},
    {path:':id',component:  ReceipeDetailComponent},
  ]},
  {path:'shopping-list', component: ShoppingListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
