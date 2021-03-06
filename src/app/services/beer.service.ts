import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestBeerByIngredientModelUI, BeerModelUI, RequestBeerByIdModelUI } from '../beers/models/beer.models';

@Injectable({
    providedIn: 'root',
})
export class BeerService {

    protected apiUrl = 'https://api.punkapi.com/v2/beers';

    constructor(private http: HttpClient) { }

    public getBeerByIngredient(request: RequestBeerByIngredientModelUI): Observable<BeerModelUI[]> {
        return this.http.get<BeerModelUI[]>(this.apiUrl + '?food=' + request.Ingredient);
    }

    public getBeerById(request: RequestBeerByIdModelUI): Observable<BeerModelUI> {
        return this.http.get<BeerModelUI>(this.apiUrl + '/' + request.Id);
    }
}
