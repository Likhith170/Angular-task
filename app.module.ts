import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ItemListComponent } from './item-list/item-list.component';
import { Test1Component } from './test1/test1.component';
import { CostComponent } from './cost/cost.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { TypesOfPipesComponent } from './types-of-pipes/types-of-pipes.component';
import { NgClassesComponent } from './ng-classes/ng-classes.component';





@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ItemListComponent,
    Test1Component,
    CostComponent,
    UsdInrPipe,
    DatePipeComponent,
    TypesOfPipesComponent,
    NgClassesComponent,
   

   
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
