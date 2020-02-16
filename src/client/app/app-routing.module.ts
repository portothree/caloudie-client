import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodayComponent } from './pages/today/today.component';

const routes: Routes = [
	{
		path: 'today',
		component: TodayComponent,
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
