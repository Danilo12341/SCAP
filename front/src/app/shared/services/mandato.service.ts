import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class MandatoService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/mandatos`;

   
    findAll(studentId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}/${studentId}`).toPromise();
    }

   
}
