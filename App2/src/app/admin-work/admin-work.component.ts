import { Component } from '@angular/core';
import { Planter } from '../planter';
import { PlanterOperationsService } from '../planter-operations.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __planterService:PlanterOperationsService;

  constructor(planterService:PlanterOperationsService)
  {
    this.__planterService = planterService;
  }

  readPlanter(planterId:string,planterName:string,height:string,category:string,bloomSeason:string,price:string,discount:string,about:string,image:string,starRating:string)
  {
      console.log(planterId+" "+planterName+" "+height+" "+category+" "+bloomSeason+" "+price+" "+discount+" "+about+" "+image+" "+starRating);
      let planterFromUser:Planter = new Planter(parseInt(planterId),planterName,parseInt(height),category,bloomSeason,image,about,parseInt(discount),parseInt(price),parseInt(starRating));
      this.__planterService.addPlanter(planterFromUser);
  }

}
