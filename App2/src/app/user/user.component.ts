import { Component } from '@angular/core';
import { Planter } from '../planter';
import { PlanterOperationsService } from '../planter-operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  __planterService:PlanterOperationsService; // creating object of Service layer

  
  allPlanter : Array<Planter> = [];
  watchList : Array<Planter> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(planterService:PlanterOperationsService)
  {
    this.__planterService = planterService;
    this.allPlanter = this.__planterService.getPlanterArr();
  }


  

  goForBuy(planter:string)
  {
    let planterId = parseInt(planter);
    console.log(" code to buy "+planterId+" planter");
    
  }

  addWatchlist(planter:string)
  {
    let addPlanterId = parseInt(planter);
    
    this.allPlanter.forEach(p=>{
      if(p.planterId == addPlanterId)
      {
        this.watchList.push(p);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allPlanter = this.__planterService.getPlantersByCategory(filterValue);
  }
  getFilterData1(filterValue:string)
  {
    console.log(" Filter Value Season"+filterValue);

    this.allPlanter = this.__planterService.getPlantersByBloomSeason(filterValue);
  }
  getFilterData2(filterValue:string)
  {
  
    console.log(" Filter Value "+filterValue);

    this.allPlanter = this.__planterService.getPlantersByStarRating(parseInt(filterValue));
  }

}
