import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';

const routes: Routes = [
	{
		path: 'food',
		component: FoodComponent,
	},
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
