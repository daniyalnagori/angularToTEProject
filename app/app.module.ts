import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component'
import { AsideComponent } from './aside.component';
import { ArticleComponent } from './article.component';
import { ArticleLooping, ArticleShow } from './articleLooping';
import { HeroListComponent } from './hero-list.component'
import { RouterModule, Router, Routes } from '@angular/router';
import { Products } from './articleLooping.service'
import { CrisisListComponent } from './hello.component';
//import {HeroListComponent} from './input.component';
const rout: Routes = [
  { path: '', redirectTo: 'aside-bar', pathMatch: 'full' },
  { path: 'aside-bar', component: AsideComponent },
  { path: 'crisis', component: CrisisListComponent },
  { path: 'hero', component: HeroListComponent },
  { path: 'crisis', component: CrisisListComponent },
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout)
  ],
  declarations: [
    AppComponent,
    HeroListComponent, ArticleShow,
    CrisisListComponent, NavComponent, AsideComponent, ArticleLooping, ArticleComponent
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule {
}
