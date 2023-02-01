import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private petsUrl: string = 'https://petstore3.swagger.io/api/v3/pet/';

  constructor(private http: HttpClient) {}

  getPets(petStatus: string): Observable<Pet[]> {
    let options = {
      params: new HttpParams().set('status', petStatus),
    };
    return this.http.get<Pet[]>(this.petsUrl + 'findByStatus', options);
  }

  addPet(pet: Pet): Observable<Pet> {
    // const options = {
    //   headers: new HttpHeaders();
    //   header.set('content-type', 'application/json'),
    // };
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    return this.http.post<Pet>(this.petsUrl, pet, { headers: headers });
  }
}
