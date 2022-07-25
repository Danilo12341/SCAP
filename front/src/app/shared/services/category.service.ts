import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class CategoryService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/category`;

    createCategory(category:any) {
      return this.http.post<any>(`${this.baseUrl}`,category).toPromise();
    }

   
}
