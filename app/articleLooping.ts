import {Component} from '@angular/core';

export class Products {
    name : string;
    price: number;
    constructor(name,price){ 
        this.name = name;
        this.price = price;
    }
}

@Component({
    selector: 'loop',
    template: `
    <div style="background-color:white" id="closeAll">
    <input type="text" #name>
    <input type="text" #price>
   
<button (click)="articleAdd(name,price);">save</button>
</div>
<div> 
 <reddit-article 
 *ngFor="let article of product" 
[product]="article">
 </reddit-article> 
</div> 
`,

})

export class ArticleLooping{
    product :Products[];
    constructor(){
       this.product = []
       this.product = [new Products("daniyal","gulshan-iqbal"),new Products("Fasih","karachi")]
    }
    articleAdd(name,price){
        console.log(`the name is ${name.value}`);
        
         this.product.push(new Products(name.value,price.value));

}

}
@Component({
    selector: 'reddit-article ',
    inputs : ['product'],
    template: `

<div class="container-fluid">
  <div class="row">
    <div class="col-sm-5" style="background-color:white;margin-left:20px;border:1px solid black;">
        
        <div style="margin-left:0px;height:230px;width:100px">
            <img src="images/teamofteams.png" width="70px" height="70px" style="margin-left:30px">
            <h4 style="margin-top:25px;margin-left:40px;color:blue">{{product.name}}</h4>
            <div>
          <div class="col-sm-3">  <img src="images/location.jpg" width="30px" height="30" style="margin-left:10px"></div>
<div class="col-sm-3" style="margin-left:10px">{{product.price}}</div>
</div>
<div class="col-sm-4" style="margin-top:20px">
   <img src="images/profile.png" style="width:40px;height:40px;">
  </div>   
  <div class="col-sm-2" style="margin-top:20px; margin-left:4px">
      0%
  </div>
     
        </div>
        
    </div>
    


    <div class="col-sm-5" style="margin-top:4px;background-color:white;margin-left:0px;border:1px solid black;margin-left:8px;">

        <div style="margin-left:0px;height:230px;width:100px">
            <img src="images/teamofteams.png" width="70px" height="70px" style="margin-left:30px">
            <h4 style="margin-top:25px;margin-left:40px;color:blue">{{product.name}}</h4>
            <div>
          <div class="col-sm-3">  <img src="images/location.jpg" width="30px" height="30" style="margin-left:10px"></div>
<div class="col-sm-3" style="margin-left:10px">{{product.price}}</div>
</div>
<div class="col-sm-4" style="margin-top:20px">
   <img src="images/profile.png" style="width:40px;height:40px;">
  </div>   
  <div class="col-sm-2" style="margin-top:20px; margin-left:4px">
      1%
  </div>
     
        </div>
    </div>

  </div>
  </div>
         
    `
})

//  <div style="margin-left:0px;height:230px;width:100px;background-color:silver">
//    <img src="images/teamofteams.png" width="70px" height="70px" style="margin-left:30px">
//     {{ product.name }} 
//     {{product.price}}
//     </div>

export class ArticleShow{
    product: Products;
    getIt(){
        
    }
}