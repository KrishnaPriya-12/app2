import { Injectable } from '@angular/core';
import { Planter } from './planter';

@Injectable({
  providedIn: 'root'
})
export class PlanterOperationsService {

  constructor() { 
    let p1:Planter=new Planter(101,'rose',10,'plant','Summer','rose.jpeg','abc',6,100,4)
    let p2:Planter=new Planter(102,'marigold',10,'plant','Winter','marigold.jpeg','egf',6,100,4)
    this.planterArr.push(p1)
    this.planterArr.push(p2)
  }


  planterArr:Planter[] = [];


  addPlanter(planterFromUser:Planter)
  {
    
    this.planterArr.push(planterFromUser); 
    console.log("Inside Planter Service : Planter Added "+planterFromUser.planterId);
    console.log(" Total Planters Are :- "+this.planterArr.length);
    
  }

  getPlanterArr():Planter[]
  {
    return this.planterArr;
  }

  getPlantersByCategory(filterCategory:string):Planter[]
  {
    // localhost:8080/api/planter/{category}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.category == filterCategory)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantersByStarRating(filterStarRating:number):Planter[]
  {
    // localhost:8080/api/planter/{rating}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.starRating == filterStarRating)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantersByBloomSeason(filterBloomSeason:string):Planter[]
  {
    console.log("bloomSeason inside service "+ filterBloomSeason);
    // localhost:8080/api/planter/{bloom}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.bloomSeason == filterBloomSeason)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
}
