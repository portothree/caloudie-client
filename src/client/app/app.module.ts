import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FoodService } from './services/food.service';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodComponent } from './components/food/food.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent, FoodComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [FoodService],
	bootstrap: [AppComponent],
})
export class AppModule {}
