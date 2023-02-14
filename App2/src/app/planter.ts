export class Planter {
    planterId:number;
    planterName:string;
    height:number;
    category:string;
    bloomSeason:string;
    imageName:string;
    about:string;
    discount:number;
    price:number;
    starRating:number;

    

    constructor(
        planterId:number,
        planterName:string,
        height:number,
        category:string,
        bloomSeason:string,
        imageName:string,
        about:string,
        discount:number,
        price:number,
        starRating:number
    )
    {
          this.planterId = planterId;
          this.planterName = planterName;
          this.height = height;
          this.category = category;
          this.bloomSeason = bloomSeason;
          this.imageName = imageName;
          this.about = about;
          this.discount = discount;
          this.price = price;
          this.starRating = starRating;
    }
}
