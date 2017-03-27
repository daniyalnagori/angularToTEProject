import {Component} from '@angular/core';
import {Products} from './articleLooping.service';
@Component({
    selector: 'aside-bar',
    templateUrl: 'app/aside.component.html' 
})

export class AsideComponent{

 
list;
course;
constructor(private products:Products){
    this.course = this.products.groups()
    this.list = this.products.listOfNames();
}
}