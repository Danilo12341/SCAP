import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class DocumentoService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/documentos`;

   
    findAll(professorId: number) : Promise<any>{
      return this.http.get<any>(`${this.baseUrl}/${professorId}`).toPromise();
    }


    createDocumento(documento:any) {
      return this.http.post<any>(`${this.baseUrl}`,documento).toPromise();
    }



   
}
