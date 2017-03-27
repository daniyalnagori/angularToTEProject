import { Component } from '@angular/core';
import { Products } from './articleLooping.service'


@Component({
  selector: 'hero',
  template: `
  


<h1 style="margin-left:550px;color:silver">Enter Your Cards</h1>

<div style="margin-top:31px;margin-left:200px;width:1000px;border-radius: 20px;background-color:#F5F5F5;border:1px solid  black">
<fieldset>


<div class="form-group row">
  <label for="url" class="col-xs-2 col-form-label" style="margin-left:0px">URL</label>
  <div class="col-xs-10">
    <input class="form-control" type="url" placeholder="http://getbootstrap.com" id="url" #url>
  </div>
</div>
<div class="form-group row">
  <label for="name" class="col-xs-2 col-form-label">Name:</label>
  <div class="col-xs-10">
    <input class="form-control" type="name" placeholder="daniyal" id="name" #name>
  </div>
</div>

<div class="form-group row">
  <label for="tel" class="col-xs-2 col-form-label">Appearance</label>
  <div class="col-xs-10">
    <input class="form-control" type="tel" placeholder="1-(555)-555-5555" id="tel" #tel>
  </div>
</div>

<div class="form-group row">
  <label for="number" class="col-xs-2 col-form-label">Number</label>
  <div class="col-xs-10">
    <input class="form-control" type="number" placeholder="0343-2556551" id="number" #number>
  </div>
</div>
<div class="form-group row">
  <label for="address" class="col-xs-2 col-form-label">Address</label>
  <div class="col-xs-10">
    <input class="form-control" type="tel" placeholder="karachi" id="address" #price>
  </div>
</div>
<div class="form-group row">
  <label for="description" class="col-xs-2 col-form-label">Description</label>
  <div class="col-xs-10">
    <input class="form-control" type="tel" placeholder="description" id="description" #description>
  </div>
</div>
<div class="form-group row">
  <label for="date" class="col-xs-2 col-form-label">Date</label>
  <div class="col-xs-10">
    <input class="form-control" type="date" placeholder="2011-08-19" id="date" #date>
  </div>
</div>


<div class="form-group row">
  <label for="color" class="col-xs-2 col-form-label">Color</label>
  <div class="col-xs-10">
    <input class="form-control" type="color" placeholder="#563d7c" id="color" #color>
  </div>
</div>
<button (click)="onSubmit(url.value,name.value,tel.value,number.value,price.value,description.value,date.value,color.value)">submit</button>

`
})

export class HeroListComponent {
  course = [];
  constructor(private products: Products) {
    this.course = this.products.groups()
  }


  onSubmit(url, name, tel, number, price, description, date, color) {
    this.products.insertData(url, name, tel, number, price, description, date, color)
    console.log(url, name, tel, number, price, description, date, color)
    //this.course.push({url,name,tel,number,price,description,date,color});
    //if(this.onSubmit ){
    //alert("your card is added")
    //}
  }


}
