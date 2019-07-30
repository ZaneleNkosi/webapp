import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import {RouterModule } from'@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component:HomeComponent},
      {path: 'view', component:ViewComponent},
      {path: 'list', component:ListComponent}
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
