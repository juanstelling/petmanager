import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { Pet } from '../model/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  private petsUrl: string = 'https://petstore3.swagger.io/api/v3/pet/';

  private petStatusSubject = new BehaviorSubject<string>('available');
  petStatusAction$ = this.petStatusSubject.asObservable();

  pets$ = this.petStatusAction$.pipe(
    switchMap((status) => {
      let options = { params: new HttpParams().set('status', status) };
      return this.http.get<Pet[]>(`${this.petsUrl}findByStatus`, options);
    }),
    shareReplay(1),
    tap((data) => console.log(data))
  );

  constructor(private http: HttpClient) {}

  selectedStatus(status: string): void {
    this.petStatusSubject.next(status);
  }

  addPet(pet: Pet): Observable<Pet> {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    return this.http.post<Pet>(this.petsUrl, pet, { headers: headers });
  }
}
