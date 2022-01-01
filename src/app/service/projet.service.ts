import { Injectable } from '@angular/core';
import { Projet } from '../model/projet.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  apiURL: string = 'http://localhost:8090/projets/api';

  projets: Projet[];

 

  constructor(private http : HttpClient) {
  
   }

  
   listeProjet(): Observable<Projet[]>{
    return this.http.get<Projet[]>(this.apiURL);
    }

   
   ajouterProjet( proj: Projet):Observable<Projet>{
    return this.http.post<Projet>(this.apiURL, proj, httpOptions);
    }

   
    supprimerProjet(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

    
     consulterProjet(id: number): Observable<Projet> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Projet>(url);
        }


updateProjet(proj :Projet) : Observable<Projet>
{
return this.http.put<Projet>(this.apiURL, proj, httpOptions);
}



  
}