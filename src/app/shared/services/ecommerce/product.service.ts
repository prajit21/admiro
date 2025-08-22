import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import {  map, Observable } from 'rxjs';
import { Products } from '../../../shared/model/product.model';

@Injectable({
    providedIn: 'root',
})

export class ProductService {

    listData: Products[] | undefined;

    private http = inject(HttpClient);

    products(): Observable<any> {
        return this.http.get('assets/data/product.json').pipe(
            map((res) => {
                return res;
            })
        );
    }

    public getProduct(id: number): Observable<Products> {
        return this.products().pipe(
            map((items) => {
                return items.find((item: Products) => {
                    return item.id === id;
                });
            })
        );
    }
}
