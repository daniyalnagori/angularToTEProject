import { Component } from '@angular/core';
import { Products } from './articleLooping.service';
import { ArticleShow, ArticleLooping } from './articleLooping'
@Component({
    selector: 'article',
    templateUrl: 'app/article.component.html'
})

export class ArticleComponent {
    course;
    constructor(private produts: Products) {
        this.course = this.produts.groups();

    }
    deleteItem(index) {

        //this.course.splice(index,1);
        //console.log(a);
        this.produts.deleteItems(index);


    }

}