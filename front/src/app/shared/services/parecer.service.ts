import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class ParecerService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/pareceres`;

   
    findAllbyId(studentId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}/${studentId}`).toPromise();
    }

    findAll() : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}`).toPromise();
    }


    createParecer(parecer:any) {
      return this.http.post<any>(`${this.baseUrl}`, parecer).toPromise();
    }



   
}
