import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class ParentescoService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/parentescos`;

   
    findAll(professorId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}/${professorId}`).toPromise();
    }


    createParentesco(parentesco:any) {
      return this.http.post<any>(`${this.baseUrl}`,parentesco).toPromise();
    }
    
    findAllbyId(professorId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}/${professorId}`).toPromise();
    }



   
}
