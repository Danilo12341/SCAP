import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class AfastamentoService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/afastamentos`;
    private baseUrl2 = `${environment.URL_UFES_SPORT_BACK}/afastamentos/one`;
    

   
    findAllbyId(professorId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}/${professorId}`).toPromise();
    }

    findAllbyIdone(afastamentoId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl2}/${afastamentoId}`).toPromise();
    }

    findAll() : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}`).toPromise();
    }
    


    createAfastamento(afastamento:any) {
      return this.http.post<any>(`${this.baseUrl}`,afastamento).toPromise();
    }




   
}
