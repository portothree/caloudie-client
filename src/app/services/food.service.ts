import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class FoodService {
	apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getFoodList(): Observable<any[]> {
		return this.http.get<any[]>(`${this.apiUrl}/foods`);
	}
}
