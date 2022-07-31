import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class AfastamentoService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/afastamentos`;

   
    findAllbyId(professorId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}/${professorId}`).toPromise();
    }

    findAll() : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}`).toPromise();
    }


    createAfastamento(afastamento:any) {
      return this.http.post<any>(`${this.baseUrl}`,afastamento).toPromise();
    }



   
}
